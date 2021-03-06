import React from 'react';
import ReactDOM from 'react-dom';

require('./babylon.min.js');

import FileSelect from './fileselect';

class Reactbabylonjs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {game:props.game};
        console.log(props);
        //console.log(this);
    }
    //https://facebook.github.io/react/docs/state-and-lifecycle.html
    //The componentDidMount() hook runs after the component output has been rendered to the DOM.
    componentDidMount(){
        this.init();
    }
    componentWillUnmount() {
        //clearInterval(this.timerID);
    }
    init(){
        console.log(this);
        // get the canvas DOM element
        var canvas = document.getElementById('renderCanvas');
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style['touch-action'] = 'none';

        //console.log(BABYLON);
        // load the 3D engine
        var engine = new BABYLON.Engine(canvas, true);

        // createScene function that creates and return the scene
        var createScene = function(){
            // create a basic BJS Scene object
            var scene = new BABYLON.Scene(engine);

            // create a FreeCamera, and set its position to (x:0, y:5, z:-10)
            var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5,-10), scene);

            // target the camera to scene origin
            camera.setTarget(BABYLON.Vector3.Zero());

            // attach the camera to the canvas
            camera.attachControl(canvas, false);

            // create a basic light, aiming 0,1,0 - meaning, to the sky
            var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,1,0), scene);

            // create a built-in "sphere" shape; its constructor takes 5 params: name, width, depth, subdivisions, scene
            var sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene);

            // move the sphere upward 1/2 of its height
            sphere.position.y = 1;

            // create a built-in "ground" shape; its constructor takes the same 5 params as the sphere's one
            var ground = BABYLON.Mesh.CreateGround('ground1', 6, 6, 2, scene);

            // return the created scene
            return scene;
        }

        // call the createScene function
        var scene = createScene();

        // run the render loop
        engine.runRenderLoop(function(){
            scene.render();
        });
        //console.log(this.state);
        //this.state.game = scene;
        //console.log(this.state);

        this.props.game = scene;

        console.log(this.props.game);

        // the canvas/window resize event handler
        window.addEventListener('resize', function(){
            engine.resize();
        });

        ReactDOM.render(
          <FileSelect game={scene} />,
          document.getElementById('header')
        );

    }

    render() {
        return <canvas id="renderCanvas" ></canvas>;
    }
}

export default Reactbabylonjs;

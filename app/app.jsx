//import HelloWorld from './hello-world';

//import 'react-select/dist/react-select.css';
//console.log(test);

import React from 'react';
import ReactDOM from 'react-dom';
//import MyFirstGrid from './myfirstgrid';
//import Reactbabylonjs from './react-babylonjs';
import LayoutEditor from './layouteditor';
//require('./babylon.min.js');

//just testing not be place here
document.body.style.overflow = 'hidden';
document.body.style.width = '100%';
document.body.style.height = '100%';
document.body.style.margin = 0;
document.body.style.padding = 0;

ReactDOM.render(
    <LayoutEditor/>,
    document.querySelector('.root')
);


//import FileSelect from './fileselect';
//ReactDOM.render(
    //<FileSelect />,
    //document.querySelector('.root')
//);

//import DropDownMenu from './dropdownmenu';
//ReactDOM.render(
    //<DropDownMenu />,
    //document.querySelector('.root')
//);

//ReactDOM.render(
//  <MyEditor />,
//  document.getElementById('container')
//);

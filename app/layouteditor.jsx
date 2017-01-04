import React from 'react';
import SplitPane from 'react-split-pane';
import Reactbabylonjs from './reactbabylonjs';
import FileMenu from './filemenu';

import FileSelect from './fileselect';

var game = null;

class LayoutEditor extends React.Component {

  constructor(props) {
    super(props);
    //this.babylon = {};

    this.game = {};
    this.state = {
        game:{},
        mode:'editor'
    };

    //console.log(this);
    //this.state = {editorState: EditorState.createEmpty()};
    //this.onChange = (editorState) => this.setState({editorState});
  }

  render() {
      return (
          <SplitPane split="horizontal" defaultSize="6%">
              <div id="header" style={{width:'100%',height:'100%'}}>
                   
              </div>
                  <SplitPane split="horizontal" defaultSize="90%">
                      <SplitPane split="vertical" defaultSize="10%">
                          <div style={{width:'100%',height:'100%'}}>3</div>
                          <SplitPane split="vertical" defaultSize="85%">
                              <div style={{width:'100%',height:'100%'}}>
                                  <Reactbabylonjs game={game}/>
                              </div>
                              <div style={{width:'100%',height:'100%'}}>5</div>
                          </SplitPane>
                      </SplitPane>
                      <div style={{width:'100%',height:'100%'}}>6</div>
                  </SplitPane>
          </SplitPane>
      );
    }
}

export default LayoutEditor;

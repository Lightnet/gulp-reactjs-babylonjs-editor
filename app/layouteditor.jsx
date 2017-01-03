import React from 'react';

import SplitPane from 'react-split-pane';
import Reactbabylonjs from './react-babylonjs';

class LayoutEditor extends React.Component {

  constructor(props) {
    super(props);
    //this.state = {editorState: EditorState.createEmpty()};
    //this.onChange = (editorState) => this.setState({editorState});
  }

  render() {
      return (
          <SplitPane split="horizontal" defaultSize="5%">
              <div style={{width:'100%',height:'100%'}}>1</div>
                  <SplitPane split="horizontal" defaultSize="90%">
                      <SplitPane split="vertical" defaultSize="10%">
                          <div style={{width:'100%',height:'100%'}}>3</div>
                          <SplitPane split="vertical" defaultSize="85%">
                              <div style={{width:'100%',height:'100%'}}>
                                  <Reactbabylonjs/>
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

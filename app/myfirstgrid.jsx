import React from 'react';

import ReactGridLayout from 'react-grid-layout';

const styleMap = {
  'STRIKETHROUGH': {
    textDecoration: 'line-through',
  },
};

class MyFirstGrid extends React.Component{

    componentDidMount(){
        //console.log(style);
        console.log(this);
    }

    render() {
        // layout is an array of objects, see the demo for more complete usage
        var layout = [
          {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
          {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
          {i: 'c', x: 4, y: 0, w: 1, h: 2}
        ];
        return (
          <ReactGridLayout className="layout" style="background-color: #00ff00;" layout={layout} cols={12} rowHeight={30} width={1200}>
            <div  key={'a'}>a</div>
            <div key={'b'}>b</div>
            <div key={'c'}>c</div>
          </ReactGridLayout>
        )
      }
}

export default MyFirstGrid;

import React from 'react';

var Select = require('react-select');

class FileSelect extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
          game: props.game,
          mode:'editor'
      };
    }

    //logChange(val) {
        //console.log("Selected: " + val);
        //console.log(val);
        //console.log(this.state);
    //}

    render() {
        var self = this;
        var options = [
            { value: 'newscene', label: 'New Scene' },
            { value: 'loadscene', label: 'Load Scene' },
            { value: 'clearscene', label: 'Clear Scene' },
            { value: 'deletescene', label: 'Delete Scene' },
            { value: 'list scene', label: 'List Scene' }
        ];

        function logChange(val) {
            console.log("Selected: " + val);
            console.log(val);
            console.log(self.props);
            //console.log(self.state);
        }

        return (
            <div style={{width:'120px'}}>
            <Select
                name="form-field-name"
                value="newscene"
                options={options}
                onChange={logChange}
            />
            </div>
        );
    }
}

export default FileSelect;

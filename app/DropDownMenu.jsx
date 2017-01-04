import React from 'react';

import Dropdown from 'react-dropdown';

class DropDownMenu extends React.Component {

    render() {
        const options = [
            'one', 'two', 'three'
        ];

        const defaultOption = options[0];

        return (
            <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
        );
    }
}

export default DropDownMenu;

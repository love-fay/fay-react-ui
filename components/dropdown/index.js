import React from 'react';
import AntdDropdown from "../res/antd/dropdown";
import RjdDropdown from "../res/own/dropdown";
import PropTypes from "prop-types";

class Dropdown extends AntdDropdown {
    render(){
        return (
            this.props.outClickHidden ? <RjdDropdown {...this.props}/> : <AntdDropdown {...this.props}/>
        )
    }
}

Dropdown.propTypes = {
    outClickHidden: PropTypes.bool
};

export default Dropdown;
import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { PropTypes } from 'prop-types';

class InputValidate extends Component {

    static propTypes = {
        type: PropTypes.string.isRequired,
        name: PropTypes.string,
        placeholder: PropTypes.string,
        value: PropTypes.string,
        valid: PropTypes.bool.isRequired,
        onChange: PropTypes.func
    };

    render() {
        return (
            <Form.Control type={this.props.type} name={this.props.name} placeholder={this.props.placeholder}
                className={this.props.valid ? '' : 'error-input'} onChange={this.props.onChange} value={this.props.value} />
        );
    }
}

export default InputValidate;
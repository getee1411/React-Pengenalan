import React, { Component } from 'react';

class FormInput2 extends Component {
    render() {
        return (
            <div class="form-group row">
                <label className>{this.props.label}</label>
                    {this.props.children}
            </div>
        );
    }
}

export default FormInput2;
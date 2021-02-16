import React, { Component } from 'react';

class FormInput extends Component {
    render() {
        return (
            <div class="form-group row">
                <label class="col-sm-2 col-form-label text-center">{this.props.label}</label>
                <div class="col-sm-10">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default FormInput;
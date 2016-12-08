import React, { Component } from 'react';
import { Field } from 'redux-form';

class EmailField extends Component {
  render() {
    return (
      <div>
        <Field
          name={this.props.name}
          type="email"
          component="input"
          placeholder={this.props.placeholder}/>
      </div>
    )
  }
}

export default EmailField;

import React, { Component } from 'react';

class Index extends Component {
  render() {
    var test1 = "123";
    const test = <h1>Hello {test1}</h1>;
    return (
      <div className="container">
        {test}
        {this.props.children}
      </div>
    )
  }
}

export default Index;

import React, { Component } from 'react';
import Home from './Home';

class Index extends Component {
  render() {
    return (
      <div>
        <Home />
        {this.props.children}
      </div>
    )
  }
}

export default Index;

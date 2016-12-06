import React, { Component } from 'react';
import Home from './pages/home/Index';

class Index extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default Index;

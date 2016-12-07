import React, { Component } from 'react';
import Header from './shared/Header';
import Footer from './shared/Footer';
import MobileMenu from './shared/MobileMenu';

class Index extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header/>
        <MobileMenu/>
        {this.props.children}
        <Footer/>
      </div>
    )
  }
}

export default Index;

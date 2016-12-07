import React, { Component } from 'react';
import Header from './shared/Header';
import Footer from './shared/Footer';
import MobileMenu from './shared/MobileMenu';

class Index extends Component {
  componentDidMount() {
    $.scrollUp({
      scrollText: '<i class="fa fa-angle-up"></i>',
      easingType: 'linear',
      scrollSpeed: 900,
      animation: 'fade'
    });
  }

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

import React, { Component } from 'react';
import Header from './shared/header/Index';
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

  componentWillMount() {
    window.sr = ScrollReveal();
  }

  render() {
    return (
      <div className="wrapper">
        <Header location={this.props.location}/>
        <MobileMenu/>
        {this.props.children}
        <Footer/>
      </div>
    )
  }
}

export default Index


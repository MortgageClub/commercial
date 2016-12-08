import React, { Component } from 'react';
import Header from './shared/Header';
import Footer from './shared/Footer';
import MobileMenu from './shared/MobileMenu';
import { fetch } from '../actions/AuthAction';
import { connect } from 'react-redux';

class Index extends Component {
  componentDidMount() {
    $.scrollUp({
      scrollText: '<i class="fa fa-angle-up"></i>',
      easingType: 'linear',
      scrollSpeed: 900,
      animation: 'fade'
    });

    if(window.localStorage.getItem('auth') !== null){
      this.props.fetch();
    }
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

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    userInfo: state.auth.userInfo
  }
}

export default connect(mapStateToProps, { fetch })(Index)


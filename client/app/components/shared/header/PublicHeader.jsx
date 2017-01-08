import React, { Component } from 'react';
import { Link } from 'react-router';
import { logout } from '../../../actions/AuthAction';
import { connect } from 'react-redux';

class PublicHeader extends Component {
  componentDidMount() {
    // var hth = $('.header-top-bar').height();
    // $(window).on('scroll', function() {
    //   if ($(this).scrollTop() > hth){
    //     $('#sticky-header').addClass("sticky");
    //   }
    //   else{
    //     $('#sticky-header').removeClass("sticky");
    //   }
    // });
  }
  render() {
    return (
      <div>
        <header className="header-area header-wrapper">
          <div className="header-top-bar bg-white">
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-6 col-xs-12">
                  <div className="logo">
                    <Link to="/">
                      <img src="/logo-blackline.png" alt=""/>
                    </Link>
                  </div>
                </div>
                <div className="col-md-7 hidden-sm hidden-xs">
                  <div className="company-info clearfix">
                    <div className="company-info-item">
                      <div className="header-icon">
                        <img src="/images/icons/phone.png" alt="" />
                      </div>
                      <div className="header-info">
                        <h6>(800) 929-0168</h6>
                        <p>Call us, we’re here for you.</p>
                      </div>
                    </div>
                    <div className="company-info-item">
                      <div className="header-icon">
                        <img src="/images/icons/mail-open.png" alt="" />
                      </div>
                      <div className="header-info">
                        <h6><a href="mailto:info@blacklinelending.com">info@blacklinelending.com</a></h6>
                        <p>You can email us anytime.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="sticky-header" className="header-middle-area transparent-header hidden-xs">
            <div className="container">
              <div className="full-width-mega-drop-menu">
                <div className="row">
                  <div className="col-md-12">
                    <div className="sticky-logo">
                      <Link to="/">
                        <img src="/logo-blackline.png" alt=""/>
                      </Link>
                    </div>
                    <nav id="primary-menu">
                      {
                        this.props.authenticated ? this.loggedInLinks() : this.loggedOutLinks()
                      }
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    )
  }

  loggedInLinks() {
    return (
      <ul className="main-menu text-center">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <a>{this.props.userInfo && (this.props.userInfo.first_name + " " + this.props.userInfo.last_name)} <i className="fa fa-angle-down"></i></a>
          <ul className="drop-menu menu-right">
            {
              this.props.userInfo && this.props.userInfo.size_of_loans && this.props.userInfo.size_of_loans > 0 
              ? 
                <li><Link to="/dashboard">Dashboard</Link></li>
              :
                null
            }
            <li><Link to="/referral">Referral</Link></li>
            <li><a onClick={this.props.logout}>Logout</a></li>
          </ul>
        </li>
      </ul>
    )
  }

  loggedOutLinks() {
    return (
      <ul className="main-menu text-center">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/sign-up">Sign up</Link>
        </li>
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    userInfo: state.auth.userInfo
  };
}

export default connect(mapStateToProps, { logout })(PublicHeader);

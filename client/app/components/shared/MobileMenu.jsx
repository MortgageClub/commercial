import React, { Component } from 'react';
import { Link } from 'react-router';
import { logout } from '../../actions/AuthAction';
import { connect } from 'react-redux';

class MobileMenu extends Component {
  componentDidMount() {
    $('nav#dropdown').meanmenu();

    if($("#logout-btn").length > 0){
      document.getElementById('logout-btn').addEventListener('click', function(){
        this.props.logout();
      }.bind(this));
    }
  }

  componentDidUpdate(prevProps) {
    if(prevProps.authenticated !== this.props.authenticated){
      $('.mean-bar').remove();
      $('nav#dropdown').meanmenu();
    }
  }

  render() {
    return (
      <div>
        {/* MOBILE MENU AREA START */}
        <div className="mobile-menu-area hidden-sm hidden-md hidden-lg">
          <div className="row">
            <div className="col-xs-12">
              <div className="mobile-menu">
                <nav id="dropdown">
                  {
                    this.props.authenticated ? this.loggedInLinks() : this.loggedOutLinks()
                  }
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* MOBILE MENU AREA END */}
      </div>
    )
  }

  loggedInLinks() {
    return (
      <ul>
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
          <a>{this.props.userInfo && (this.props.userInfo.first_name + " " + this.props.userInfo.last_name)}</a>
          <ul>
            {
              this.props.userInfo && this.props.userInfo.size_of_loans && this.props.userInfo.size_of_loans > 0 
              ? 
                <li><Link to="/dashboard">Dashboard</Link></li>
              :
                null
            }
            <li><Link to="/referral">Referral</Link></li>
            <li id="logout-btn"><a>Logout</a></li>
          </ul>
        </li>
      </ul>
    )
  }

  loggedOutLinks() {
    return (
      <ul>
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

export default connect(mapStateToProps, { logout })(MobileMenu);

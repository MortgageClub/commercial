import React, { Component } from 'react';
import { Link } from 'react-router';
import { logout } from '../../../actions/AuthAction';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

class BorrowerHeader extends Component {
  render() {
    return (
      <div>
        <header className="header-area header-wrapper">
          <div id="sticky-header" className="header-middle-area transparent-header hidden-xs sticky">
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
                      <ul className="main-menu text-center">
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/dashboard">Loans</Link>
                        </li>
                        <li>
                          <Link to="/referral">Broker Connect</Link>
                        </li>
                        <li>
                          <a>{this.props.userInfo && (this.props.userInfo.first_name + " " + this.props.userInfo.last_name)} <i className="fa fa-angle-down"></i></a>
                          <ul className="drop-menu menu-right">
                            <li><a onClick={this.props.logout}>Logout</a></li>
                          </ul>
                        </li>
                      </ul>
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
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    userInfo: state.auth.userInfo
  };
}

export default connect(mapStateToProps, { logout })(BorrowerHeader);

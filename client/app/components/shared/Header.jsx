import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <div>
        {/* HEADER AREA START */}
        <header className="header-area header-wrapper">
          <div className="header-top-bar bg-white">
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-6 col-xs-12">
                  <div className="logo">
                    <a href="index.html">
                      <img src="images/logo/logo.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-md-6 hidden-sm hidden-xs">
                  <div className="company-info clearfix">
                    <div className="company-info-item">
                      <div className="header-icon">
                        <img src="images/icons/phone.png" alt="" />
                      </div>
                      <div className="header-info">
                        <h6>+88 (012) 564 979 56</h6>
                        <p>We are open 9 am - 10pm</p>
                      </div>
                    </div>
                    <div className="company-info-item">
                      <div className="header-icon">
                        <img src="images/icons/mail-open.png" alt="" />
                      </div>
                      <div className="header-info">
                        <h6><a href="mailto:hnasir770@gmail.com">info@sheltek.com</a></h6>
                        <p>You can mail us</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                  <div className="header-search clearfix">
                    <form action="#">
                      <button className="search-icon" type="submit">
                      <img src="images/icons/search.png" alt=""/>
                      </button>
                      <input type="text" placeholder="Search..." />
                    </form>
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
                      <a href="index.html">
                        <img src="images/logo/logo.png" alt=""/>
                      </a>
                    </div>
                    <nav id="primary-menu">
                      <ul className="main-menu text-center">
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/">Service</Link>
                        </li>
                        <li>
                          <Link to="/">About</Link>
                        </li>
                        <li>
                          <Link to="/login">Login</Link>
                        </li>
                        <li>
                          <Link to="/register">Register</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* HEADER AREA END */}
      </div>
    )
  }
}

export default Header;

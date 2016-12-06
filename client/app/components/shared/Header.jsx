import React, { Component } from 'react';

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
                          <a href="index.html">Home</a>
                          <ul className="drop-menu">
                            <li><a href="index.html">Home-1</a></li>
                            <li><a href="index-2.html">home-2</a></li>
                            <li><a href="index-3.html">home-3</a></li>
                            <li><a href="index-4.html">Background Video</a></li>
                            <li><a href="index-5.html">Background Video overlay</a></li>
                            <li><a href="index-6.html">BG Video dot overlay</a></li>
                            <li><a href="index-7.html">Animated Text</a></li>
                            <li><a href="index-8.html">Animated Text dot overlay</a></li>
                            <li><a href="index-9.html">Box layout - 1</a></li>
                            <li><a href="index-10.html">Box layout - 2</a></li>
                            <li><a href="index-11.html">Box layout - 3</a></li>
                          </ul>
                        </li>
                        <li className="mega-parent">
                          <a href="#">Elements</a>
                          <div className="mega-menu-area">
                            <ul className="single-mega-item">
                              <li><a href="elements-accordion.html">Accordion</a></li>
                              <li><a href="elements-agent.html">Agent</a></li>
                              <li><a href="elements-alerts.html">Alerts</a></li>
                              <li><a href="elements-audio.html">Audio</a></li>
                              <li><a href="elements-call-to-actions.html">Call-to-actions</a></li>
                              <li><a href="elements-contact-1.html">Contact-1</a></li>
                              <li><a href="elements-contact-2.html">Contact-2</a></li>
                            </ul>
                            <ul className="single-mega-item">
                              <li><a href="elements-features.html">Features</a></li>
                              <li><a href="elements-footer-1.html">Footer-1</a></li>
                              <li><a href="elements-footer-2.html">Footer-2</a></li>
                              <li><a href="elements-header-sticky-no.html">Header-sticky-no</a></li>
                              <li><a href="elements-header-sticky.html">Header-sticky</a></li>
                              <li><a href="elements-map.html">Map</a></li>
                              <li><a href="elements-media.html">Media</a></li>
                            </ul>
                            <ul className="single-mega-item">
                              <li><a href="elements-pagination.html">Pagination</a></li>
                              <li><a href="elements-progress-bar.html">Progress-bar</a></li>
                              <li><a href="elements-property.html">Property</a></li>
                              <li><a href="elements-services.html">Services</a></li>
                              <li><a href="elements-sidebar-left-1.html">Sidebar-left-1</a></li>
                              <li><a href="elements-sidebar-left-2.html">Sidebar-left-2</a></li>
                              <li><a href="elements-sidebar-right-1.html">Sidebar-right-1</a></li>
                            </ul>
                            <ul className="single-mega-item">
                              <li><a href="elements-sidebar-right-2.html">Sidebar-right-1</a></li>
                              <li><a href="elements-tab.html">Tab</a></li>
                              <li><a href="elements-table.html">Table</a></li>
                              <li><a href="elements-testimonials.html">Testimonials</a></li>
                              <li><a href="elements-toggles.html">Toggles</a></li>
                              <li><a href="elements-typography.html">Typography</a></li>
                              <li><a href="elements-video.html">Video</a></li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <a href="service.html">Service</a>
                          <ul className="drop-menu">
                            <li><a href="service.html">Service</a></li>
                            <li><a href="service-details.html">Service details</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="properties.html">Properties</a>
                          <ul className="drop-menu">
                            <li><a href="properties.html">Properties</a></li>
                            <li><a href="properties-left-sidebar.html">Properties left sidebar</a></li>
                            <li><a href="properties-right-sidebar.html">Properties right sidebar</a></li>
                            <li><a href="properties-details.html">Properties details</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="agent.html">Agent</a>
                          <ul className="drop-menu">
                            <li><a href="agent.html">Agent</a></li>
                            <li><a href="agent-details.html">Agent details</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Pages</a>
                          <ul className="drop-menu menu-right">
                            <li><a href="about.html">About</a></li>
                            <li><a href="agent.html">Agent</a></li>
                            <li><a href="agent-details.html">Agent-details</a></li>
                            <li><a href="features.html">Features</a></li>
                            <li><a href="service.html">Service</a></li>
                            <li><a href="service-details.html">Service details</a></li>
                            <li><a href="login.html">Login</a></li>
                            <li><a href="404.html">404</a></li>
                            <li><a href="contact.html">Contact</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="blog.html">Blog</a>
                          <ul className="drop-menu menu-right">
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="blog-left-sidebar.html">Blog left sidebar</a></li>
                            <li><a href="blog-right-sidebar.html">Blog right sidebar</a></li>
                            <li><a href="single-blog.html">Single Bloge</a></li>
                          </ul>
                        </li>
                        <li><a href="contact.html">Contact</a></li>
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

import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="wrapper">
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
            <div id="sticky-header" className="header-middle-area  transparent-header hidden-xs">
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
                                        <li><a href="index.html">Home</a>
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
                                        <li className="mega-parent"><a href="#">Elements</a>
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
                                        <li><a href="service.html">Service</a>
                                            <ul className="drop-menu">
                                                <li><a href="service.html">Service</a></li>
                                                <li><a href="service-details.html">Service details</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="properties.html">Properties</a>
                                            <ul className="drop-menu">
                                                <li><a href="properties.html">Properties</a></li>
                                                <li><a href="properties-left-sidebar.html">Properties left sidebar</a></li>
                                                <li><a href="properties-right-sidebar.html">Properties right sidebar</a></li>
                                                <li><a href="properties-details.html">Properties details</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="agent.html">Agent</a>
                                            <ul className="drop-menu">
                                                <li><a href="agent.html">Agent</a></li>
                                                <li><a href="agent-details.html">Agent details</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Pages's</a>
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
                                        <li><a href="blog.html">Blog</a>
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

        {/* MOBILE MENU AREA START */}
        <div className="mobile-menu-area hidden-sm hidden-md hidden-lg">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="mobile-menu">
                            <nav id="dropdown">
                                <ul>
                                    <li><a href="index.html">Home</a>
                                        <ul>
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
                                    <li><a href="service.html">Service</a>
                                        <ul>
                                            <li><a href="service.html">Service</a></li>
                                            <li><a href="service-details.html">Service details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="properties.html">Properties</a>
                                        <ul>
                                            <li><a href="properties.html">Properties</a></li>
                                            <li><a href="properties-left-sidebar.html">Properties left sidebar</a></li>
                                            <li><a href="properties-right-sidebar.html">Properties right sidebar</a></li>
                                            <li><a href="properties-details.html">Properties details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Pages</a>
                                        <ul>
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
                                    <li><a href="blog.html">Blog</a>
                                        <ul>
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
        {/* MOBILE MENU AREA END */}

        {/* SLIDER SECTION START */}
        <div className="slider-1 pos-relative slider-overlay">
            <div className="bend niceties preview-1">
                <div id="ensign-nivoslider-3" className="slides">
                    <img src="images/slider/1.jpg" alt="" title="#slider-direction-1"  />
                    <img src="images/slider/2.jpg" alt="" title="#slider-direction-2"  />
                    <img src="images/slider/1.jpg" alt="" title="#slider-direction-3"  />
                </div>
                {/* direction 1 */}
                <div id="slider-direction-1" className="slider-direction">
                    <div className="slider-content text-center">
                        <div className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
                            <h4 className="slider-1-title-1">Welcome to <span>Sheltek</span></h4>
                        </div>
                        <div className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s">
                            <h1 className="slider-1-title-2">FIND YOUR DREAM HOUSE WITH US</h1>
                        </div>
                        <div className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.5s">
                            <p className="slider-1-desc">Lorem consectetur adipiscing elit, sed do eiusmod tempor dolor sit amet <br/> contetur  adipiscing elit, sed do  eiusmod tempor incididunt </p>
                        </div>
                        <div className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="2s">
                            <a className="slider-button mt-40" href="#">Read More</a>
                        </div>
                    </div>
                </div>
                {/* direction 2 */}
                <div id="slider-direction-2" className="slider-direction">
                    <div className="slider-content text-left">
                        <div className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
                            <h4 className="slider-1-title-1">Welcome to <span>Sheltek</span></h4>
                        </div>
                        <div className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s">
                            <h1 className="slider-1-title-2">FIND YOUR DREAM HOUSE WITH US</h1>
                        </div>
                        <div className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.5s">
                            <p className="slider-1-desc">Lorem consectetur adipiscing elit, sed do eiusmod tempor dolor sit amet <br/> contetur  adipiscing elit, sed do  eiusmod tempor incididunt </p>
                        </div>
                        <div className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="2s">
                            <a className="slider-button mt-40" href="#">Read More</a>
                        </div>
                    </div>
                </div>
                {/* direction 2 */}
                <div id="slider-direction-3" className="slider-direction">
                    <div className="slider-content text-right">
                        <div className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
                            <h4 className="slider-1-title-1">Welcome to <span>Sheltek</span></h4>
                        </div>
                        <div className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s">
                            <h1 className="slider-1-title-2">FIND YOUR DREAM HOUSE WITH US</h1>
                        </div>
                        <div className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.5s">
                            <p className="slider-1-desc">Lorem consectetur adipiscing elit, sed do eiusmod tempor dolor sit amet <br/> contetur  adipiscing elit, sed do  eiusmod tempor incididunt </p>
                        </div>
                        <div className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="2s">
                            <a className="slider-button mt-40" href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* SLIDER SECTION END */}

        {/* Start page content */}
        <section id="page-content" className="page-wrapper">

            {/* FIND HOME AREA START */}
            <div className="find-home-area bg-blue call-to-bg plr-140 pt-60 pb-20">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 col-xs-12">
                            <div className="section-title text-white">
                                <h3>FIND YOUR</h3>
                                <h2 className="h1">HOME HERE</h2>
                            </div>
                        </div>
                        <div className="col-md-9 col-xs-12">
                            <div className="find-homes">
                                <div className="row">
                                    <div className="col-sm-3 col-xs-12">
                                        <div className="find-home-item custom-select">
                                            <select className="selectpicker" title="Location" data-hide-disabled="true" data-live-search="true">
                                                <optgroup disabled="disabled" label="disabled">
                                                    <option>Hidden</option>
                                                </optgroup>
                                                <optgroup label="Australia">
                                                    <option>Sydney</option>
                                                    <option>Melbourne</option>
                                                    <option>Cairns</option>
                                                </optgroup>
                                                <optgroup label="USA">
                                                    <option>South Carolina</option>
                                                    <option>Florida</option>
                                                    <option>Rhode Island</option>
                                                </optgroup>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 col-xs-12">
                                        <div className="find-home-item custom-select">
                                            <select className="selectpicker" title="Sub - Location" data-hide-disabled="true" data-live-search="true">
                                                <optgroup disabled="disabled" label="disabled">
                                                    <option>Hidden</option>
                                                </optgroup>
                                                <optgroup label="Australia">
                                                    <option>southeastern coast</option>
                                                    <option>southeastern tip</option>
                                                    <option>northwest corner</option>
                                                </optgroup>
                                                <optgroup label="USA">
                                                    <option>Charleston</option>
                                                    <option>St. Petersburg</option>
                                                    <option>Newport</option>
                                                </optgroup>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 col-xs-12">
                                        <div className="find-home-item">
                                            <input type="text" name="min-area" placeholder="Min area (sqft)"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 col-xs-12">
                                        <div className="find-home-item">
                                            <input type="text" name="max-area" placeholder="Max area (sqft)"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 col-xs-12">
                                        <div className="find-home-item  custom-select">
                                            <select className="selectpicker" title="No. of Beadrooms" data-hide-disabled="true">
                                                <optgroup  label="1">
                                                    <option label="1">1 Beadrooms</option>
                                                    <option>2 Beadrooms</option>
                                                    <option>3 Beadrooms</option>
                                                    <option>4 Beadrooms</option>
                                                    <option>5 Beadrooms</option>
                                                </optgroup>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 col-xs-12">
                                        <div className="find-home-item custom-select">
                                            <select className="selectpicker" title="No. of Bathrooms" data-hide-disabled="true">
                                                <optgroup label="2">
                                                    <option>1 Bathrooms</option>
                                                    <option>2 Bathrooms</option>
                                                    <option>3 Bathrooms</option>
                                                    <option>4 Bathrooms</option>
                                                    <option>5 Bathrooms</option>
                                                </optgroup>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-xs-12">
                                        <div className="row">
                                            <div className="col-sm-7 col-xs-12">
                                                <div className="find-home-item">
                                                    {/* shop-filter */}
                                                    <div className="shop-filter">
                                                        <div className="price_filter">
                                                            <div className="price_slider_amount">
                                                                <input type="submit"  value="You range :"/>
                                                                <input type="text" id="amount" name="price"  placeholder="Add Your Price" />
                                                            </div>
                                                            <div id="slider-range"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-5 col-xs-12">
                                                <div className="find-home-item mb-0-xs">
                                                    <a className="button-1 btn-block btn-hover-1" href="#">SEARCH</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* FIND HOME AREA END */}

            {/* ABOUT SHELTEK AREA START */}
            <div className="about-sheltek-area ptb-115">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-xs-12">
                            <div className="section-title mb-30">
                                <h3>SOME WORD </h3>
                                <h2>ABOUT SHELTEK</h2>
                            </div>
                            <div className="about-sheltek-info">
                                <p><span data-placement="top" data-toggle="tooltip" data-original-title="The name you can trust" className="tooltip-content">Sheltek</span> is the best theme for  elit, sed do eiusmod tempor dolor sit amet, conse ctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et lorna aliquatd minim veniam, quis nostrud exercitation oris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolo.</p>
                                <p>Lorem is a dummy text do eiusmod tempor dolor sit amet, onsectetur adip iscing elit, sed do eiusmod tempor incididunt ut labore et lorna aliqua Ut enim onsectetur </p>
                                <p>Lorem is a dummy text do eiusmod tempor dolor sit amet, onsectetur adip iscing elit, sed do eiusmod tempor incididunt ut labore et lorna aliqua Ut enim onsectetur </p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xs-12">
                            <div className="about-image">
                                <a href="about.html"><img src="images/about/1.jpg" alt=""/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ABOUT SHELTEK AREA END */}

            {/* SERVICES AREA START */}
            <div className="services-area pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title-2 text-center">
                                <h2>OUR SERVICES</h2>
                                <p>Sheltek is the best theme for  elit, sed do eiusmod tempor dolor sit amet, conse ctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et lorna aliquatd minim veniam, quis nostrud</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="service-carousel">
                            {/* service-item */}
                            <div className="col-md-12">
                                <div className="service-item">
                                    <div className="service-item-image">
                                        <a href="service-details.html"><img src="images/service/1.jpg" alt=""/></a>
                                    </div>
                                    <div className="service-item-info">
                                        <h5><a href="service-details.html">Sale Property</a></h5>
                                        <p>Property sale best theme for litdo eiusmod tempor dolor sit amet, conse tetur adiping eiusmo</p>
                                    </div>
                                </div>
                            </div>
                            {/* service-item */}
                            <div className="col-md-12">
                                <div className="service-item">
                                    <div className="service-item-image">
                                        <a href="service-details.html"><img src="images/service/2.jpg" alt=""/></a>
                                    </div>
                                    <div className="service-item-info">
                                        <h5><a href="service-details.html">Buy Property</a></h5>
                                        <p>Property sale best theme for litdo eiusmod tempor dolor sit amet, conse tetur adiping eiusmo</p>
                                    </div>
                                </div>
                            </div>
                            {/* service-item */}
                            <div className="col-md-12">
                                <div className="service-item">
                                    <div className="service-item-image">
                                        <a href="service-details.html"><img src="images/service/3.jpg" alt=""/></a>
                                    </div>
                                    <div className="service-item-info">
                                        <h5><a href="service-details.html">Rent Property</a></h5>
                                        <p>Property sale best theme for litdo eiusmod tempor dolor sit amet, conse tetur adiping eiusmo</p>
                                    </div>
                                </div>
                            </div>
                            {/* service-item */}
                            <div className="col-md-12">
                                <div className="service-item">
                                    <div className="service-item-image">
                                        <a href="service-details.html"><img src="images/service/4.jpg" alt=""/></a>
                                    </div>
                                    <div className="service-item-info">
                                        <h5><a href="service-details.html">Property Management</a></h5>
                                        <p>Property sale best theme for litdo eiusmod tempor dolor sit amet, conse tetur adiping eiusmo</p>
                                    </div>
                                </div>
                            </div>
                            {/* service-item */}
                            <div className="col-md-12">
                                <div className="service-item">
                                    <div className="service-item-image">
                                        <a href="service-details.html"><img src="images/service/4.jpg" alt=""/></a>
                                    </div>
                                    <div className="service-item-info">
                                        <h5><a href="service-details.html">Sale Property</a></h5>
                                        <p>Property sale best theme for litdo eiusmod tempor dolor sit amet, conse tetur adiping eiusmo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* SERVICES AREA END */}

            {/* BOOKING AREA START */}
            <div className="booking-area bg-1 call-to-bg plr-140 pt-75">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 col-sm-4 col-xs-12">
                            <div className="section-title text-white">
                                <h3>BOOK YOUR</h3>
                                <h2 className="h1">HOME HERE</h2>
                            </div>
                        </div>
                        <div className="col-md-9 col-sm-8 col-xs-12">
                            <div className="booking-conternt clearfix">
                                <div className="book-house text-white">
                                    <h2>BOOK YO`UR APPARTMENT OR HOUSE </h2>
                                    <h2 className="h5">CALL US ON : +0123  456  789  </h2>
                                </div>
                                <div className="booking-imgae">
                                    <img src="images/others/booking.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* BOOKING AREA END */}

            {/* FEATURED FLAT AREA START */}
            <div className="featured-flat-area pt-115 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title-2 text-center">
                                <h2>Featured PROPERTY</h2>
                                <p>Sheltek is the best theme for  elit, sed do eiusmod tempor dolor sit amet, conse ctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et lorna aliquatd minim veniam, quis nostrud</p>
                            </div>
                        </div>
                    </div>
                    <div className="featured-flat">
                        <div className="row">
                            {/* flat-item */}
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="flat-item">
                                    <div className="flat-item-image">
                                        <span className="for-sale">For Sale</span>
                                        <a href="properties-details.html"><img src="images/flat/1.jpg" alt=""/></a>
                                        <div className="flat-link">
                                            <a href="properties-details.html">More Details</a>
                                        </div>
                                        <ul className="flat-desc">
                                            <li>
                                                <img src="images/icons/4.png" alt=""/>
                                                <span>450 sqft</span>
                                            </li>
                                            <li>
                                                <img src="images/icons/5.png" alt=""/>
                                                <span>5</span>
                                            </li>
                                            <li>
                                                <img src="images/icons/6.png" alt=""/>
                                                <span>3</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="flat-item-info">
                                        <div className="flat-title-price">
                                            <h5><a href="properties-details.html">Masons de Villa </a></h5>
                                            <span className="price">$52,350</span>
                                        </div>
                                        <p><img src="images/icons/location.png" alt=""/>568 E 1st Ave, Ney Jersey</p>
                                    </div>
                                </div>
                            </div>
                            {/* flat-item */}
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="flat-item">
                                    <div className="flat-item-image">
                                        <a href="properties-details.html"><img src="images/flat/2.jpg" alt=""/></a>
                                        <div className="flat-link">
                                            <a href="properties-details.html">More Details</a>
                                        </div>
                                        <ul className="flat-desc">
                                            <li>
                                                <img src="images/icons/4.png" alt=""/>
                                                <span>450 sqft</span>
                                            </li>
                                            <li>
                                                <img src="images/icons/5.png" alt=""/>
                                                <span>5</span>
                                            </li>
                                            <li>
                                                <img src="images/icons/6.png" alt=""/>
                                                <span>3</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="flat-item-info">
                                        <div className="flat-title-price">
                                            <h5><a href="properties-details.html">Masons de Villa </a></h5>
                                            <span className="price">$52,350</span>
                                        </div>
                                        <p><img src="images/icons/location.png" alt=""/>568 E 1st Ave, Ney Jersey</p>
                                    </div>
                                </div>
                            </div>
                            {/* flat-item */}
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="flat-item">
                                    <div className="flat-item-image">
                                        <span className="for-sale rent">For rent</span>
                                        <a href="properties-details.html"><img src="images/flat/3.jpg" alt=""/></a>
                                        <div className="flat-link">
                                            <a href="properties-details.html">More Details</a>
                                        </div>
                                        <ul className="flat-desc">
                                            <li>
                                                <img src="images/icons/4.png" alt=""/>
                                                <span>450 sqft</span>
                                            </li>
                                            <li>
                                                <img src="images/icons/5.png" alt=""/>
                                                <span>5</span>
                                            </li>
                                            <li>
                                                <img src="images/icons/6.png" alt=""/>
                                                <span>3</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="flat-item-info">
                                        <div className="flat-title-price">
                                            <h5><a href="properties-details.html">Masons de Villa </a></h5>
                                            <span className="price">$52,350</span>
                                        </div>
                                        <p><img src="images/icons/location.png" alt=""/>568 E 1st Ave, Ney Jersey</p>
                                    </div>
                                </div>
                            </div>
                            {/* flat-item */}
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="flat-item">
                                    <div className="flat-item-image">
                                        <a href="properties-details.html"><img src="images/flat/4.jpg" alt=""/></a>
                                        <div className="flat-link">
                                            <a href="properties-details.html">More Details</a>
                                        </div>
                                        <ul className="flat-desc">
                                            <li>
                                                <img src="images/icons/4.png" alt=""/>
                                                <span>450 sqft</span>
                                            </li>
                                            <li>
                                                <img src="images/icons/5.png" alt=""/>
                                                <span>5</span>
                                            </li>
                                            <li>
                                                <img src="images/icons/6.png" alt=""/>
                                                <span>3</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="flat-item-info">
                                        <div className="flat-title-price">
                                            <h5><a href="properties-details.html">Masons de Villa </a></h5>
                                            <span className="price">$52,350</span>
                                        </div>
                                        <p><img src="images/icons/location.png" alt=""/>568 E 1st Ave, Ney Jersey</p>
                                    </div>
                                </div>
                            </div>
                            {/* flat-item */}
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="flat-item">
                                    <div className="flat-item-image">
                                        <span className="for-sale">For Sale</span>
                                        <a href="properties-details.html"><img src="images/flat/5.jpg" alt=""/></a>
                                        <div className="flat-link">
                                            <a href="properties-details.html">More Details</a>
                                        </div>
                                        <ul className="flat-desc">
                                            <li>
                                                <img src="images/icons/4.png" alt=""/>
                                                <span>450 sqft</span>
                                            </li>
                                            <li>
                                                <img src="images/icons/5.png" alt=""/>
                                                <span>5</span>
                                            </li>
                                            <li>
                                                <img src="images/icons/6.png" alt=""/>
                                                <span>3</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="flat-item-info">
                                        <div className="flat-title-price">
                                            <h5><a href="properties-details.html">Masons de Villa </a></h5>
                                            <span className="price">$52,350</span>
                                        </div>
                                        <p><img src="images/icons/location.png" alt=""/>568 E 1st Ave, Ney Jersey</p>
                                    </div>
                                </div>
                            </div>
                            {/* flat-item */}
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="flat-item">
                                    <div className="flat-item-image">
                                        <a href="properties-details.html"><img src="images/flat/6.jpg" alt=""/></a>
                                        <div className="flat-link">
                                            <a href="properties-details.html">More Details</a>
                                        </div>
                                        <ul className="flat-desc">
                                            <li>
                                                <img src="images/icons/4.png" alt=""/>
                                                <span>450 sqft</span>
                                            </li>
                                            <li>
                                                <img src="images/icons/5.png" alt=""/>
                                                <span>5</span>
                                            </li>
                                            <li>
                                                <img src="images/icons/6.png" alt=""/>
                                                <span>3</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="flat-item-info">
                                        <div className="flat-title-price">
                                            <h5><a href="properties-details.html">Masons de Villa </a></h5>
                                            <span className="price">$52,350</span>
                                        </div>
                                        <p><img src="images/icons/location.png" alt=""/>568 E 1st Ave, Ney Jersey</p>
                                    </div>
                                </div>
                            </div>
                            {/* flat-item */}
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="flat-item">
                                    <div className="flat-item-image">
                                        <span className="for-sale rent">For rent</span>
                                        <a href="properties-details.html"><img src="images/flat/7.jpg" alt=""/></a>
                                        <div className="flat-link">
                                            <a href="properties-details.html">More Details</a>
                                        </div>
                                        <ul className="flat-desc">
                                            <li>
                                                <img src="images/icons/4.png" alt=""/>
                                                <span>450 sqft</span>
                                            </li>
                                            <li>
                                                <img src="images/icons/5.png" alt=""/>
                                                <span>5</span>
                                            </li>
                                            <li>
                                                <img src="images/icons/6.png" alt=""/>
                                                <span>3</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="flat-item-info">
                                        <div className="flat-title-price">
                                            <h5><a href="properties-details.html">Masons de Villa </a></h5>
                                            <span className="price">$52,350</span>
                                        </div>
                                        <p><img src="images/icons/location.png" alt=""/>568 E 1st Ave, Ney Jersey</p>
                                    </div>
                                </div>
                            </div>
                            {/* flat-item */}
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="flat-item">
                                    <div className="flat-item-image">
                                        <a href="properties-details.html"><img src="images/flat/8.jpg" alt=""/></a>
                                        <div className="flat-link">
                                            <a href="properties-details.html">More Details</a>
                                        </div>
                                        <ul className="flat-desc">
                                            <li>
                                                <img src="images/icons/4.png" alt=""/>
                                                <span>450 sqft</span>
                                            </li>
                                            <li>
                                                <img src="images/icons/5.png" alt=""/>
                                                <span>5</span>
                                            </li>
                                            <li>
                                                <img src="images/icons/6.png" alt=""/>
                                                <span>3</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="flat-item-info">
                                        <div className="flat-title-price">
                                            <h5><a href="properties-details.html">Masons de Villa </a></h5>
                                            <span className="price">$52,350</span>
                                        </div>
                                        <p><img src="images/icons/location.png" alt=""/>568 E 1st Ave, Ney Jersey</p>
                                    </div>
                                </div>
                            </div>
                            {/* flat-item */}
                            <div className="col-md-4 hidden-sm col-xs-12">
                                <div className="flat-item">
                                    <div className="flat-item-image">
                                        <span className="for-sale">For Sale</span>
                                        <a href="properties-details.html"><img src="images/flat/9.jpg" alt=""/></a>
                                        <div className="flat-link">
                                            <a href="properties-details.html">More Details</a>
                                        </div>
                                        <ul className="flat-desc">
                                            <li>
                                                <img src="images/icons/4.png" alt=""/>
                                                <span>450 sqft</span>
                                            </li>
                                            <li>
                                                <img src="images/icons/5.png" alt=""/>
                                                <span>5</span>
                                            </li>
                                            <li>
                                                <img src="images/icons/6.png" alt=""/>
                                                <span>3</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="flat-item-info">
                                        <div className="flat-title-price">
                                            <h5><a href="properties-details.html">Masons de Villa </a></h5>
                                            <span className="price">$52,350</span>
                                        </div>
                                        <p><img src="images/icons/location.png" alt=""/>568 E 1st Ave, Ney Jersey</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* FEATURED FLAT AREA END */}

            {/* FEATURES AREA START */}
            <div className="features-area fix">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-7 col-md-offset-5">
                            <div className="features-info bg-gray">
                                <div className="section-title mb-30">
                                    <h3>HERE IS</h3>
                                    <h2 className="h1">AWESOME FEATUES</h2>
                                </div>
                                <div className="features-desc">
                                    <p><span data-placement="top" data-toggle="tooltip" data-original-title="The name you can trust" className="tooltip-content">Sheltek</span> is the best theme for  elit, sed do eiusmod tempor dolor sit amet, conse ctetur adipiscing elit, sed do smod tempor incididunt ut labore et lorna aliquatd minim veniam, quis nostrud exercitation oris nisi</p>
                                </div>
                                <div className="features-include">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-sm-4">
                                            <div className="features-include-list">
                                                <h6><img src="images/icons/7.png" alt=""/>Fully Furnished</h6>
                                                <p>Lorem is a dummy text do eiud tempor dolor sit amet dum</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-4">
                                            <div className="features-include-list">
                                                <h6><img src="images/icons/7.png" alt=""/>Royal Touch Paint</h6>
                                                <p>Lorem is a dummy text do eiud tempor dolor sit amet dum</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-4">
                                            <div className="features-include-list">
                                                <h6><img src="images/icons/7.png" alt=""/>Latest Interior Design</h6>
                                                <p>Lorem is a dummy text do eiud tempor dolor sit amet dum</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-4">
                                            <div className="features-include-list">
                                                <h6><img src="images/icons/7.png" alt=""/>Non Stop Security</h6>
                                                <p>Lorem is a dummy text do eiud tempor dolor sit amet dum</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-4">
                                            <div className="features-include-list">
                                                <h6><img src="images/icons/7.png" alt=""/>Living Inside a Nature</h6>
                                                <p>Lorem is a dummy text do eiud tempor dolor sit amet dum</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-4">
                                            <div className="features-include-list">
                                                <h6><img src="images/icons/7.png" alt=""/>Luxurious Fittings</h6>
                                                <p>Lorem is a dummy text do eiud tempor dolor sit amet dum</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* FEATURES AREA END */}

            {/* OUR AGENTS AREA START */}
            <div className="our-agents-area pt-115 pb-55">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title-2 text-center">
                                <h2>OUR AGENTS</h2>
                                <p>Sheltek is the best theme for  elit, sed do eiusmod tempor dolor sit amet, conse ctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et lorna aliquatd minim veniam, quis nostrud</p>
                            </div>
                        </div>
                    </div>
                    <div className="our-agents">
                        <div className="row">
                            <div className="agents-carousel">
                  {/* single-agent */}
                                <div className="col-md-12">
                                    <div className="single-agent">
                                        <div className="agent-image">
                                            <img src="images/agents/1.jpg" alt=""/>
                                        </div>
                                        <div className="agent-info">
                                            <div className="agent-name">
                                                <h5><a href="agent-details.html">Shah M Nawaz</a></h5>
                                                <p>Real Estate Agent</p>
                                            </div>
                                        </div>
                                        <div className="agent-info-hover">
                                            <div className="agent-name">
                                                <h5><a href="agent-details.html">Shah M Nawaz</a></h5>
                                                <p>Real Estate Agent</p>
                                            </div>
                                            <ul className="agent-address">
                                                <li><img src="images/icons/phone-2.png" alt=""/>+1245  785  659 </li>
                                                <li><img src="images/icons/mail-close.png" alt=""/>eva@gmail.com </li>
                                            </ul>
                                            <ul className="social-media">
                                                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                                <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                                <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                  {/* single-agent */}
                                <div className="col-md-12">
                                    <div className="single-agent">
                                        <div className="agent-image">
                                            <img src="images/agents/2.jpg" alt=""/>
                                        </div>
                                        <div className="agent-info">
                                            <div className="agent-name">
                                                <h5><a href="agent-details.html">Eva Sharlin</a></h5>
                                                <p>Real Estate Broker</p>
                                            </div>
                                        </div>
                                        <div className="agent-info-hover">
                                            <div className="agent-name">
                                                <h5><a href="agent-details.html">Eva Sharlin</a></h5>
                                                <p>Real Estate Broker</p>
                                            </div>
                                            <ul className="agent-address">
                                                <li><img src="images/icons/phone-2.png" alt=""/>+1245  785  659 </li>
                                                <li><img src="images/icons/mail-close.png" alt=""/>eva@gmail.com </li>
                                            </ul>
                                            <ul className="social-media">
                                                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                                <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                                <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                  {/* single-agent */}
                                <div className="col-md-12">
                                    <div className="single-agent">
                                        <div className="agent-image">
                                            <img src="images/agents/3.jpg" alt=""/>
                                        </div>
                                        <div className="agent-info">
                                            <div className="agent-name">
                                                <h5><a href="agent-details.html">Momen Bhuyan</a></h5>
                                                <p>Real Estate Broker</p>
                                            </div>
                                        </div>
                                        <div className="agent-info-hover">
                                            <div className="agent-name">
                                                <h5><a href="agent-details.html">Momen Bhuyan</a></h5>
                                                <p>Real Estate Broker</p>
                                            </div>
                                            <ul className="agent-address">
                                                <li><img src="images/icons/phone-2.png" alt=""/>+1245  785  659 </li>
                                                <li><img src="images/icons/mail-close.png" alt=""/>eva@gmail.com </li>
                                            </ul>
                                            <ul className="social-media">
                                                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                                <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                                <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                  {/* single-agent */}
                                <div className="col-md-12">
                                    <div className="single-agent">
                                        <div className="agent-image">
                                            <img src="images/agents/4.jpg" alt=""/>
                                        </div>
                                        <div className="agent-info">
                                            <div className="agent-name">
                                                <h5><a href="agent-details.html">Sarmin Tabassum</a></h5>
                                                <p>Real Estate Agent</p>
                                            </div>
                                        </div>
                                        <div className="agent-info-hover">
                                            <div className="agent-name">
                                                <h5><a href="agent-details.html">Sarmin Tabassum</a></h5>
                                                <p>Real Estate Agent</p>
                                            </div>
                                            <ul className="agent-address">
                                                <li><img src="images/icons/phone-2.png" alt=""/>+1245  785  659 </li>
                                                <li><img src="images/icons/mail-close.png" alt=""/>eva@gmail.com </li>
                                            </ul>
                                            <ul className="social-media">
                                                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                                <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                                <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* single-agent */}
                                <div className="col-md-12">
                                    <div className="single-agent">
                                        <div className="agent-image">
                                            <img src="images/agents/3.jpg" alt=""/>
                                        </div>
                                        <div className="agent-info">
                                            <div className="agent-name">
                                                <h5><a href="agent-details.html">Momen Bhuyan</a></h5>
                                                <p>Real Estate Broker</p>
                                            </div>
                                        </div>
                                        <div className="agent-info-hover">
                                            <div className="agent-name">
                                                <h5><a href="agent-details.html">Momen Bhuyan</a></h5>
                                                <p>Real Estate Broker</p>
                                            </div>
                                            <ul className="agent-address">
                                                <li><img src="images/icons/phone-2.png" alt=""/>+1245  785  659 </li>
                                                <li><img src="images/icons/mail-close.png" alt=""/>eva@gmail.com </li>
                                            </ul>
                                            <ul className="social-media">
                                                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                                <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                                <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* OUR AGENTS AREA END */}

            {/* TESTIMONIAL AREA START */}
            <div className="testimonial-area pb-115">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="testimonial">
                                <div className="row">
                                    <div className="col-md-8 col-sm-9">
                                        <div className="section-title mb-30">
                                            <h3>SOME OF OUR</h3>
                                            <h2 className="h1">HAPPY CLIENTS</h2>
                                        </div>
                                        <div className="testimonial-carousel dots-right-btm">
                                            {/* testimonial-item */}
                                            <div className="testimonial-item">
                                                <div className="testimonial-brief">
                                                    <p><span data-placement="top" data-toggle="tooltip" data-original-title="The name you can trust" className="tooltip-content">Sheltek</span> is the best theme for  elit, sed do eiusmod tempor dolor sit amet, conse ctetur adipiscing elit, ed do eiusmod tempor incididunt ut labore et lorna aliquatd minim veniam, quis nostrud exercitation oris nisi ut aliquip ex ea commodo equat. Duis aute irure dolo. liquatd minim veniam, quis nostrud exercitation oris nisi ut aliquip ex ea commodo equat. Duis aute irure dolo uis nostrud exercitation</p>
                                                </div>
                                                <h6>Zasica Luci, <span>CEO</span></h6>
                                            </div>
                                            {/* testimonial-item */}
                                            <div className="testimonial-item">
                                                <div className="testimonial-brief">
                                                    <p><span data-placement="top" data-toggle="tooltip" data-original-title="The name you can trust" className="tooltip-content">Sheltek</span> is the best theme for  elit, sed do eiusmod tempor dolor sit amet, conse ctetur adipiscing elit, ed do eiusmod tempor incididunt ut labore et lorna aliquatd minim veniam, quis nostrud exercitation oris nisi ut aliquip ex ea commodo equat. Duis aute irure dolo. liquatd minim veniam, quis nostrud exercitation oris nisi ut aliquip ex ea commodo equat. Duis aute irure dolo uis nostrud exercitation</p>
                                                </div>
                                                <h6>Zasica Luci, <span>CEO</span></h6>
                                            </div>
                                            {/* testimonial-item */}
                                            <div className="testimonial-item">
                                                <div className="testimonial-brief">
                                                    <p><span data-placement="top" data-toggle="tooltip" data-original-title="The name you can trust" className="tooltip-content">Sheltek</span> is the best theme for  elit, sed do eiusmod tempor dolor sit amet, conse ctetur adipiscing elit, ed do eiusmod tempor incididunt ut labore et lorna aliquatd minim veniam, quis nostrud exercitation oris nisi ut aliquip ex ea commodo equat. Duis aute irure dolo. liquatd minim veniam, quis nostrud exercitation oris nisi ut aliquip ex ea commodo equat. Duis aute irure dolo uis nostrud exercitation</p>
                                                </div>
                                                <h6>Zasica Luci, <span>CEO</span></h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-3">
                                        <div className="testimonial-image">
                                            <img src="images/others/testimonial.jpg" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* TESTIMONIAL AREA END */}

            {/* BLOG AREA START */}
            <div className="blog-area pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title-2 text-center">
                                <h2>FROM BLOG</h2>
                                <p>Sheltek is the best theme for  elit, sed do eiusmod tempor dolor sit amet, conse ctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et lorna aliquatd minim veniam, quis nostrud</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="blog-carousel">
                            {/* blog-item */}
                            <div className="col-md-12">
                                <article className="blog-item bg-gray">
                                    <div className="blog-image">
                                        <a href="single-blog.html"><img src="images/blog/1.jpg" alt=""/></a>
                                    </div>
                                    <div className="blog-info">
                                        <div className="post-title-time">
                                            <h5><a href="single-blog.html">Maridland de Villa</a></h5>
                                            <p>July 30, 2016 / 10 am</p>
                                        </div>
                                        <p>Lorem must explain to you how all this mistaolt denouncing pleasure and praising pain wasnad I will give you a complete pain was praising</p>
                                        <a className="read-more" href="single-blog.html">Read more</a>
                                    </div>
                                </article>
                            </div>
                            {/* blog-item */}
                            <div className="col-md-12">
                                <article className="blog-item bg-gray">
                                    <div className="blog-image">
                                        <a href="single-blog.html"><img src="images/blog/2.jpg" alt=""/></a>
                                    </div>
                                    <div className="blog-info">
                                        <div className="post-title-time">
                                            <h5><a href="single-blog.html">Latest Design House</a></h5>
                                            <p>July 30, 2016 / 10 am</p>
                                        </div>
                                        <p>Lorem must explain to you how all this mistaolt denouncing pleasure and praising pain wasnad I will give you a complete pain was praising</p>
                                        <a className="read-more" href="single-blog.html">Read more</a>
                                    </div>
                                </article>
                            </div>
                            {/* blog-item */}
                            <div className="col-md-12">
                                <article className="blog-item bg-gray">
                                    <div className="blog-image">
                                        <a href="single-blog.html"><img src="images/blog/3.jpg" alt=""/></a>
                                    </div>
                                    <div className="blog-info">
                                        <div className="post-title-time">
                                            <h5><a href="single-blog.html">Duplex Villa House</a></h5>
                                            <p>July 30, 2016 / 10 am</p>
                                        </div>
                                        <p>Lorem must explain to you how all this mistaolt denouncing pleasure and praising pain wasnad I will give you a complete pain was praising</p>
                                        <a className="read-more" href="single-blog.html">Read more</a>
                                    </div>
                                </article>
                            </div>
                            {/* blog-item */}
                            <div className="col-md-12">
                                <article className="blog-item bg-gray">
                                    <div className="blog-image">
                                        <a href="single-blog.html"><img src="images/blog/2.jpg" alt=""/></a>
                                    </div>
                                    <div className="blog-info">
                                        <div className="post-title-time">
                                            <h5><a href="single-blog.html">Latest Design House</a></h5>
                                            <p>July 30, 2016 / 10 am</p>
                                        </div>
                                        <p>Lorem must explain to you how all this mistaolt denouncing pleasure and praising pain wasnad I will give you a complete pain was praising</p>
                                        <a className="read-more" href="single-blog.html">Read more</a>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* BLOG AREA END */}

            {/* BRAND AREA START */}
            <div className="brand-area pb-115">
                <div className="container">
                    <div className="row">
                        <div className="brand-carousel">
                            {/* brand-item */}
                            <div className="col-md-12">
                                <div className="brand-item">
                                    <img src="images/brand/1.png" alt=""/>
                                </div>
                            </div>
                            {/* brand-item */}
                            <div className="col-md-12">
                                <div className="brand-item">
                                    <img src="images/brand/2.png" alt=""/>
                                </div>
                            </div>
                            {/* brand-item */}
                            <div className="col-md-12">
                                <div className="brand-item">
                                    <img src="images/brand/3.png" alt=""/>
                                </div>
                            </div>
                            {/* brand-item */}
                            <div className="col-md-12">
                                <div className="brand-item">
                                    <img src="images/brand/4.png" alt=""/>
                                </div>
                            </div>
                            {/* brand-item */}
                            <div className="col-md-12">
                                <div className="brand-item">
                                    <img src="images/brand/5.png" alt=""/>
                                </div>
                            </div>
                            {/* brand-item */}
                            <div className="col-md-12">
                                <div className="brand-item">
                                    <img src="images/brand/1.png" alt=""/>
                                </div>
                            </div>
                            {/* brand-item */}
                            <div className="col-md-12">
                                <div className="brand-item">
                                    <img src="images/brand/4.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* BRAND AREA END */}

            {/* SUBSCRIBE AREA START */}
            <div className="subscribe-area bg-blue call-to-bg plr-140 ptb-50">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 col-sm-4 col-xs-12">
                            <div className="section-title text-white">
                                <h3>SUBSCRIBE</h3>
                                <h2 className="h1">NEWSLETTER</h2>
                            </div>
                        </div>
                        <div className="col-md-9 col-sm-8 col-xs-12">
                            <div className="subscribe">
                                <form action="#">
                                    <input type="text" name="subscribe" placeholder="Enter yur email here..."/>
                                    <button type="submit" value="send">Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* SUBSCRIBE AREA END */}
        </section>
        {/* End page content */}

        {/* Start footer area */}
        <footer id="footer" className="footer-area bg-2 bg-opacity-black-90">
            <div className="footer-top pt-110 pb-80">
                <div className="container">
                    <div className="row">
                        {/* footer-address */}
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <div className="footer-widget">
                                <h6 className="footer-titel">GET IN TOUCH</h6>
                                <ul className="footer-address">
                                    <li>
                                        <div className="address-icon">
                                            <img src="images/icons/location-2.png" alt=""/>
                                        </div>
                                        <div className="address-info">
                                            <span>8901 Marmora Raod,</span>
                                            <span>Glasgow, D04  89GR</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="address-icon">
                                            <img src="images/icons/phone-3.png" alt=""/>
                                        </div>
                                        <div className="address-info">
                                            <span>Telephone : (801) 4256  9856</span>
                                            <span>Telephone : (801) 4256  9658</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="address-icon">
                                            <img src="images/icons/world.png" alt=""/>
                                        </div>
                                        <div className="address-info">
                                            <span>Email : info@sheltek.com</span>
                                            <span>Web :<a href="#" target="_blank"> www.sheltek.com</a></span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* footer-latest-news */}
                        <div className="col-lg-6 col-md-5 hidden-sm col-xs-12">
                            <div className="footer-widget middle">
                                <h6 className="footer-titel">LATEST NEWS</h6>
                                <ul className="footer-latest-news">
                                    <li>
                                        <div className="latest-news-image">
                                            <a href="single-blog.html"><img src="images/blog/1.jpg" alt=""/></a>
                                        </div>
                                        <div className="latest-news-info">
                                            <h6><a href="single-blog.html">Beautiful Home</a></h6>
                                            <p>Lorem ipsum dolor sit amet, consectetur acinglit sed do eiusmod tempor inciidunt ut labore </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="latest-news-image">
                                            <a href="single-blog.html"><img src="images/blog/2.jpg" alt=""/></a>
                                        </div>
                                        <div className="latest-news-info">
                                            <h6><a href="single-blog.html">Beautiful Home</a></h6>
                                            <p>Lorem ipsum dolor sit amet, consectetur acinglit sed do eiusmod tempor inciidunt ut labore </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="latest-news-image">
                                            <a href="single-blog.html"><img src="images/blog/3.jpg" alt=""/></a>
                                        </div>
                                        <div className="latest-news-info">
                                            <h6><a href="single-blog.html">Beautiful Home</a></h6>
                                            <p>Lorem ipsum dolor sit amet, consectetur acinglit sed do eiusmod tempor inciidunt ut labore </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* footer-contact */}
                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                            <div className="footer-widget">
                                <h6 className="footer-titel">QUICK CONTACT</h6>
                                <div className="footer-contact">
                                    <p>Lorem ipsum dolor sit amet, consectetur acinglit sed do eiusmod tempor</p>
                                    <form  id="contact-form-2" action="mail_footer.php" method="post">
                                        <input type="email" name="email2" placeholder="Type your E-mail address..."/>
                                        <textarea name="message2" placeholder="Write here..."></textarea>
                                        <button type="submit" value="send">Send</button>
                                    </form>
                                    <p className="form-messege"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="copyright text-center">
                                <p>Copyright &copy; 2016 <a href="https://themeforest.net/user/devitems/portfolio"><b>Devitems</b></a>. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        {/* End footer area */}
      </div>
    )
  }
}

export default Home;

import React, { Component } from 'react';
import Header from '../../shared/Header';
import Footer from '../../shared/Footer';
import MobileMenu from '../../shared/MobileMenu';
import Subscribe from '../../shared/Subscribe';
import Slider from './Slider';
import HowItWorks from './HowItWorks';
import About from './About';
import BookHomeHouse from './BookHomeHouse';

class Index extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header/>
        <MobileMenu/>
        <Slider/>

        {/* Start page content */}
        <section id="page-content" className="page-wrapper">
          <HowItWorks/>
          <About/>
          <BookHomeHouse/>

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
          <Subscribe />
        </section>
        {/* End page content */}
        <Footer/>
      </div>
    )
  }
}

export default Index;

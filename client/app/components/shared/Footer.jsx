import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
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

export default Footer;

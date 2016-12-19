import React, { Component } from 'react';
import { getFooterBlogs } from '../../actions/BlogAction';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Footer extends Component {
  componentDidMount() {
    this.props.getFooterBlogs();
  }

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
                          <img src="/images/icons/location-2.png" alt=""/>
                        </div>
                        <div className="address-info">
                          <span>8901 Marmora Raod,</span>
                          <span>Glasgow, D04  89GR</span>
                        </div>
                      </li>
                      <li>
                        <div className="address-icon">
                          <img src="/images/icons/phone-3.png" alt=""/>
                        </div>
                        <div className="address-info">
                          <span>Telephone : (801) 4256  9856</span>
                          <span>Telephone : (801) 4256  9658</span>
                        </div>
                      </li>
                      <li>
                        <div className="address-icon">
                          <img src="/images/icons/world.png" alt=""/>
                        </div>
                        <div className="address-info">
                          <span>Email : info@sheltek.com</span>
                          <span>Web :<a href="#" target="_blank"> www.sheltek.com</a></span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-6 col-md-5 hidden-sm col-xs-12">
                  <div className="footer-widget middle">
                    <h6 className="footer-titel">LATEST NEWS</h6>
                    <ul className="footer-latest-news">
                      {
                        this.props.blogs && this.props.blogs.map(blog => this.renderBlog(blog))
                      }
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

  renderBlog(blog) {
    return (
      <li key={"footer_" + blog.slug}>
        <div className="latest-news-image">
          <Link to={`/blog/${blog.slug}`}>
            <img src={blog.image_url} alt=""/>
          </Link>
        </div>
        <div className="latest-news-info">
          <h6><Link to={`/blog/${blog.slug}`}>{blog.title}</Link></h6>
          <p>{blog.short_description}</p>
        </div>
      </li>
    )
  }
}

function mapStateToProps(state) {
  return {
    blogs: state.blog.footer_blogs
  };
}

export default connect(mapStateToProps, { getFooterBlogs })(Footer);

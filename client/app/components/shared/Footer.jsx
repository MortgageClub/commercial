import React, { Component } from 'react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { send } from '../../actions/QuickContactAction';

class Footer extends Component {
  render() {
    const { handleSubmit, pristine, submitting, reset } = this.props;

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
                          <span>SILICON VALLEY OFFICE</span>
                          <span>75 E Santa Clara St</span>
                          <span>6th Floor</span>
                          <span>San Jose, CA 95113</span>
                        </div>
                      </li>
                      <li>
                        <div className="address-icon">
                          <img src="/images/icons/location-2.png" alt=""/>
                        </div>
                        <div className="address-info">
                          <span>SOUTHERN CALIFORNIA OFFICE</span>
                          <span>2945 Townsgate Rd</span>
                          <span>Suite 200</span>
                          <span>Westlake Village, CA 91362</span>
                        </div>
                      </li>
                      <li>
                        <div className="address-icon">
                          <img src="/images/icons/phone-3.png" alt=""/>
                        </div>
                        <div className="address-info">
                          <span>Phone: (000) 000-0000</span>
                        </div>
                      </li>
                      <li>
                        <div className="address-icon">
                          <img src="/images/icons/world.png" alt=""/>
                        </div>
                        <div className="address-info">
                          <span>Email: info@blacklinelending.com</span>
                          <span>Web :<a href="https://www.blacklinelending.com/" target="_blank"> wwww.blacklinelending.com</a></span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-6 col-md-5 hidden-sm col-xs-12">
                  <div className="footer-widget middle">
                    <h6 className="footer-titel">LEGAL</h6>
                    <div className="footer-contact">
                      <p>Equity Center Real Estate dba Blackline Lending only provide commercial loan brokerage services. Blackline Lending operates in California under BRE license #00637579.</p>
                    </div>
                    <div className="footer-legal">
                      <p><a href="http://www2.dre.ca.gov/PublicASP/pplinfo.asp?start=1" target="_blank">Bureau of Real Estate</a></p>
                      <p><Link to="/privacy-policy">Privacy Policy</Link></p>
                      <p><Link to="/terms-of-service">Terms of Service</Link></p>
                    </div>
                  </div>
                </div>
                {/* footer-contact */}
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <div className="footer-widget">
                    <h6 className="footer-titel">QUICK CONTACT</h6>
                    <div className="footer-contact">
                      <p>Contact Blackline Lending with media enquiries, for information on how to become a client, or with questions related to our lending platform.</p>
                      <form
                        id="contact-form-2"
                        onSubmit={handleSubmit(this.submit.bind(this))}>
                        <Field
                          name="email"
                          type="email"
                          component="input"
                          placeholder="Email" />
                        <Field
                          name="message"
                          component="textarea"
                          placeholder="Message" />
                        <button type="submit" value="send">Send</button>
                      </form>
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
                    <p>Copyright &copy; 2017 <a href="https://www.blacklinelending.com"><b>Blackline Lending</b></a>. All rights reserved.</p>
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

  submit(quickContact) {
    this.props.send(quickContact);
  }
}

export default connect(null, { send })(
  reduxForm({
    form: 'quickContactForm'
  })(Footer)
)

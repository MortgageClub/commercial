import React, { Component } from 'react';
import { Link } from 'react-router';

class ForgotPassword extends Component {
  render() {
    return (
      <div>
        <section id="page-content" className="page-wrapper">
          <div className="login-section pt-115 pb-70">
            <div className="container">
              <div className="row">
                <div className="col-md-offset-3 col-md-6 col-xs-12">
                  <div className="registered-customers mb-50">
                    <h2 className="mb-50">FORGOT PASSWORD</h2>
                    <form action="#">
                      <div className="login-account p-30 box-shadow">
                        <p>We'll email you instructions on how to reset your password.</p>
                        <input type="text" name="name" placeholder="Email Address" />
                        <p><small><Link to="/login">Login?</Link></small></p>
                        <button className="submit-btn-1" type="submit">RESET</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default ForgotPassword;

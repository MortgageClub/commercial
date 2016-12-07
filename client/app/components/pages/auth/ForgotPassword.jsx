import React, { Component } from 'react';

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
                    <h5 className="mb-50">FORGOT PASSWORD</h5>
                    <form action="#">
                      <div className="login-account p-30 box-shadow">
                        <p>If you have an account with us, Please log in.</p>
                        <input type="text" name="name" placeholder="Email Address" />
                        <input type="password" name="password" placeholder="Password" />
                        <p><small><a href="#">Forgot our password?</a></small></p>
                        <button className="submit-btn-1" type="submit">login</button>
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

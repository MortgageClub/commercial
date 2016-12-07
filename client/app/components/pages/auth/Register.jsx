import React, { Component } from 'react';

class Register extends Component {
  render() {
    return (
      <div>
        <section id="page-content" className="page-wrapper">
          <div className="login-section pt-115 pb-70">
            <div className="container">
              <div className="row">
                <div className="col-md-offset-3 col-md-6 col-xs-12">
                  <div className="new-customers mb-50">
                    <form action="#">
                      <h5 className="mb-50">REGISTER</h5>
                      <div className="login-account p-30 box-shadow">
                        <div className="row">
                          <div className="col-sm-6">
                            <input type="text" placeholder="First Name" />
                          </div>
                          <div className="col-sm-6">
                            <input type="text" placeholder="last Name" />
                          </div>
                          <div className="col-sm-6">
                            <select className="custom-select-2">
                              <option value="defalt">country</option>
                              <option value="c-1">Australia</option>
                              <option value="c-2">Bangladesh</option>
                              <option value="c-3">Unitd States</option>
                              <option value="c-4">Unitd Kingdom</option>
                            </select>
                          </div>
                          <div className="col-sm-6">
                            <select className="custom-select-2">
                              <option value="defalt">State</option>
                              <option value="c-1">Melbourne</option>
                              <option value="c-2">Dhaka</option>
                              <option value="c-3">New York</option>
                              <option value="c-4">London</option>
                            </select>
                          </div>
                          <div className="col-sm-6">
                            <select className="custom-select-2">
                              <option value="defalt">Town/City</option>
                              <option value="c-1">Victoria</option>
                              <option value="c-2">Chittagong</option>
                              <option value="c-3">Boston</option>
                              <option value="c-4">Cambridge</option>
                            </select>
                          </div>
                          <div className="col-sm-6">
                            <input type="text" placeholder="Phone here..." />
                          </div>
                        </div>
                        <input type="text" placeholder="Company neme here..." />
                        <input type="text" placeholder="Email address here..." />
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder="Confirm Password" />
                        <div className="checkbox">
                          <label className="mr-10">
                            <small>
                            <input type="checkbox" name="signup" />Sign up for our newsletter!
                            </small>
                          </label>
                          <label>
                            <small>
                            <input type="checkbox" name="signup" />Receive special offers from our partners!
                            </small>
                          </label>
                        </div>
                        <div className="row">
                          <div className="col-sm-6 col-xs-12">
                            <button className="submit-btn-1 mt-20" type="submit" value="register">Register</button>
                          </div>
                          <div className="col-sm-6 col-xs-12">
                            <button className="submit-btn-1 mt-20 f-right" type="reset">Clear</button>
                          </div>
                        </div>
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

export default Register;

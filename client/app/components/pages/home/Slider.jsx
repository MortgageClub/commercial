import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { login } from '../../../actions/AuthAction';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

class Slider extends Component {
  render() {
    const { handleSubmit, pristine, submitting, reset } = this.props;

    return (
      <div>
        {/* SLIDER SECTION START */}
        <div className="slider-2 bg-3 bg-opacity-black-70">
          <div className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
            <div className="find-home-box">
              <div className="section-title text-white">
                <h3>FIND YOUR</h3>
                <h2 className="h1">LOAN HERE</h2>
              </div>
              <div className="find-homes">
                <form
                  onSubmit={handleSubmit(this.submit.bind(this))} >
                  <div className="row">
                    <div className="col-sm-6 col-xs-12">
                      <div className="find-home-item">
                        <Field
                          name="state"
                          component="select"
                          className="custom-select-2">
                          <option>State</option>
                          <option value="ff0000">Alabama</option>
                          <option value="00ff00">Alaska</option>
                          <option value="0000ff">Arizona</option>
                          <option value="0000ff">Arkansas</option>
                          <option value="0000ff">California</option>
                          <option value="0000ff">Colorado</option>
                          <option value="0000ff">Connecticut</option>
                          <option value="0000ff">Florida</option>
                          <option value="0000ff">Georgia</option>
                          <option value="0000ff">Hawaii</option>
                          <option value="0000ff">Idaho</option>
                          <option value="0000ff">Illinois</option>
                          <option value="0000ff">Indiana</option>
                          <option value="0000ff">Iowa</option>
                          <option value="0000ff">Kansas</option>
                          <option value="0000ff">Kentucky</option>
                          <option value="0000ff">Louisiana</option>
                          <option value="0000ff">Maine</option>
                        </Field>
                      </div>
                    </div>
                    <div className="col-sm-6 col-xs-12">
                      <div className="find-home-item">
                        <Field
                          name="property_type"
                          component="select"
                          className="custom-select-2">
                          <option>Property Type</option>
                          <option value="ff0000">Retail</option>
                          <option value="00ff00">Multifamily</option>
                          <option value="0000ff">Office</option>
                          <option value="0000ff">Industrial</option>
                          <option value="0000ff">Self-storage</option>
                          <option value="0000ff">Manufactured Housing</option>
                          <option value="0000ff">Hotel</option>
                          <option value="0000ff">Other</option>
                        </Field>
                      </div>
                    </div>
                    <div className="col-sm-6 col-xs-12">
                      <div className="find-home-item">
                        <Field
                          name="purpose"
                          component="select"
                          className="custom-select-2">
                          <option>Purpose</option>
                          <option value="ff0000">Purchase</option>
                          <option value="00ff00">Refinace</option>
                          <option value="0000ff">Cash-out Refinace</option>
                        </Field>
                      </div>
                    </div>
                    <div className="col-sm-6 col-xs-12">
                      <div className="find-home-item">
                        <Field
                          name="loan_amount"
                          type="text"
                          component="input"
                          placeholder="Loan amount"/>
                      </div>
                    </div>
                    <div className="col-sm-6 col-xs-12">
                      <div className="find-home-item">
                        <Field
                          name="full_name"
                          type="text"
                          component="input"
                          placeholder="Your name"/>
                      </div>
                    </div>
                    <div className="col-sm-6 col-xs-12">
                      <div className="find-home-item">
                        <Field
                          name="email"
                          type="email"
                          component="input"
                          placeholder="Email"/>
                      </div>
                    </div>
                    <div className="col-xs-12">
                      <div className="row">
                        <div className="col-sm-7 col-xs-12">
                          Please give us some details about what you’re looking for.
                        </div>
                        <div className="col-sm-5 col-xs-12">
                          <div className="find-home-item">
                            <a className="button-1 btn-block btn-hover-1" href="#">SUBMIT</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* SLIDER SECTION END */}
      </div>
    )
  }

  submit() {
    console.log(1);
  }
}

function mapStateToProps(state) {
  return {
    errorMessages: state.auth.errors,
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(
  reduxForm({
    form: 'fillForm'
  })(Slider)
)
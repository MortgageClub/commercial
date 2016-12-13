import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { create } from '../../../actions/LoanAction';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { STATES, PROPERTY_TYPES, PURPOSES } from '../../../utils/ValueUtils';
import Geosuggest from '../../../../node_modules/react-geosuggest';

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
                    <div className="col-sm-12 col-xs-12">
                      <div className="find-home-item">
                        <Geosuggest placeholder="Property Address"/>
                      </div>
                    </div>
                    <div className="col-sm-6 col-xs-12">
                      <div className="find-home-item">
                        <Field
                          name="purpose"
                          component="select"
                          className="custom-select-2">
                          {
                            PURPOSES.map(purpose => {
                              return <option key={purpose.key} value={purpose.key}>{purpose.value}</option>
                            })
                          }
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
                    <div className="col-sm-12 col-xs-12">
                      <div className="find-home-item">
                        <Field
                          name="detail"
                          type="text"
                          component="textarea"
                          placeholder="Please give us some details about what you’re looking for."/>
                      </div>
                    </div>
                    <div className="col-xs-12">
                      <div className="row">
                        <div className="col-sm-7 col-xs-12">
                        </div>
                        <div className="col-sm-5 col-xs-12">
                          <div className="find-home-item">
                            <button className="button-1 btn-block btn-hover-1" type="submit" disabled={pristine || submitting}>SUBMIT</button>
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

  submit(fillInfo) {
    this.props.create(fillInfo);
  }
}

function mapStateToProps(state) {
  return {
    errorMessages: state.auth.errors,
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps, { create })(
  reduxForm({
    form: 'fillForm'
  })(Slider)
)
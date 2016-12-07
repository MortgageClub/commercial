import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { register } from '../../../actions/AuthAction';
import { browserHistory } from 'react-router';

class Register extends Component {
  componentWillMount() {
    if (this.props.authenticated) {
      browserHistory.goBack();
    }
  }

  render() {
    if (this.props.authenticated) {
      return <div></div>
    }
    const { handleSubmit, pristine, submitting, reset } = this.props;

    return (
      <div>
        <section id="page-content" className="page-wrapper">
          <div className="login-section pt-115 pb-70">
            <div className="container">
              <div className="row">
                <div className="col-md-offset-3 col-md-6 col-xs-12">
                  <div className="new-customers mb-50">
                    <h2 className="mb-50">REGISTER</h2>
                    <form
                      onSubmit={handleSubmit(this.submit.bind(this))}>
                      {this.renderErrors()}
                      <div className="login-account p-30 box-shadow">
                        <div className="row">
                          <div className="col-sm-6">
                            <Field
                              name="first_name"
                              type="text"
                              component="input"
                              placeholder="First Name" />
                          </div>
                          <div className="col-sm-6">
                            <Field
                              name="last_name"
                              type="text"
                              component="input"
                              placeholder="Last Name" />
                          </div>
                        </div>
                        <Field
                          name="email"
                          type="email"
                          component="input"
                          placeholder="Email" />
                        <Field
                          name="password"
                          type="password"
                          component="input"
                          placeholder="Password" />
                        <Field
                          name="password_confirmation"
                          type="password"
                          component="input"
                          placeholder="Confirm Password" />

                        <div className="row">
                          <div className="col-sm-6">
                            <button className="submit-btn-1 mt-20" type="submit" disabled={pristine || submitting}>Register</button>
                          </div>
                          <div className="col-sm-6">
                            <button className="submit-btn-1 mt-20 f-right" type="reset" disabled={pristine || submitting} onClick={reset}>Clear</button>
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

  submit(userInfo) {
    this.props.register(userInfo);
  }

  renderErrors() {
    if (this.props.errorMessages) {
      const errors = this.props.errorMessages.map(error => {
        return (
          <li key={error}>{error}</li>
        )
      })
      return (
        <ul className="alert alert-danger list-unstyled">{errors}</ul>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    errorMessages: state.auth.errors,
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps, { register })(
  reduxForm({
    form: 'registerForm'
  })(Register)
)


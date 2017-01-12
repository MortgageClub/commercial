import React, { Component } from 'react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { resetPassword, removeErrors } from '../../../actions/AuthAction';
import { isAuthenticated } from '../../../utils/AuthUtils';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

class ForgotPassword extends Component {
  componentWillMount() {
    if (isAuthenticated()) {
      browserHistory.goBack();
    }
  }

  componentWillUnmount() {
    this.props.removeErrors();
  }

  render() {
    const { handleSubmit, pristine, submitting, reset } = this.props;

    return (
      <div>
        <section id="page-content" className="page-wrapper">
          <div className="login-section pt-115 pb-70">
            <div className="container">
              <div className="row">
                <div className="col-md-offset-3 col-md-6 col-xs-12">
                  <div className="registered-customers mb-50">
                    <h2 className="mb-50">FORGOT PASSWORD</h2>
                    <form
                      onSubmit={handleSubmit(this.submit.bind(this))}>
                      {this.renderErrors()}
                      <div className="login-account p-30 box-shadow">
                        <p>We'll email you instructions on how to reset your password.</p>
                        <Field
                          name="email"
                          type="email"
                          component="input"
                          placeholder="Email" />
                        <p><small><Link to="/login">Login?</Link></small></p>
                        <button className="submit-btn-1" type="submit" disabled={pristine || submitting}>RESET</button>
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

  submit(info) {
    this.props.resetPassword(info);
  }

  removeAlert() {
    this.props.removeErrors();
  }
  
  renderErrors() {
    if (this.props.errorMessages) {
      const errors = this.props.errorMessages.map(error => {
        return (
          <li key={error.message}>{error.message}</li>
        )
      })
      return (
        <div className="alert alert-danger list-unstyled">
          <button type="button" className="close" onClick={this.removeAlert.bind(this)}>
            <span aria-hidden="true">×</span>
          </button>
          <ul>
            {errors}
          </ul>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    errorMessages: state.auth.errors
  }
}

export default connect(mapStateToProps, { resetPassword, removeErrors })(
  reduxForm({
    form: 'forgotPasswordForm'
  })(ForgotPassword)
)

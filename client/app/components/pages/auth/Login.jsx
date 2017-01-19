import React, { Component } from 'react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { login, loginWithoutPassword, removeErrors } from '../../../actions/AuthAction';
import { isAuthenticated } from '../../../utils/AuthUtils';
import { track } from '../../../utils/MixPanelUtils';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

class Login extends Component {
  componentWillMount() {
    track("View Login Page");
    if(this.props.params && this.props.params.id) {
      this.props.loginWithoutPassword(this.props.params.id);
    }
    else if (isAuthenticated()) {
      browserHistory.goBack();
    }
  }

  componentWillUnmount() {
    this.props.removeErrors();
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
                  <div className="registered-customers mb-50">
                    <h2 className="mb-50">LOGIN</h2>
                    <form
                      onSubmit={handleSubmit(this.submit.bind(this))}>
                      {this.renderErrors()}
                      <div className="login-account p-30 box-shadow">
                        <p>If you have an account with us, Please log in.</p>
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
                        <p>
                          <small>
                            <Link to="/forgot-password">Forgot your password?</Link>
                          </small>
                        </p>
                        <button className="submit-btn-1" type="submit" disabled={pristine || submitting}>Login</button>
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
    track("Click Login");
    this.props.login(userInfo);
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

function mapStateToProps(state, ownProps) {
  return {
    errorMessages: state.auth.errors,
    params: ownProps.location.query
  }
}

export default connect(mapStateToProps, { login, loginWithoutPassword, removeErrors })(
  reduxForm({
    form: 'loginForm'
  })(Login)
)

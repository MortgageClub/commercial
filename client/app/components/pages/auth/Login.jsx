import React, { Component } from 'react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { login } from '../../../actions/AuthAction';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

class Login extends Component {
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
                            <Link to="/forgot-password">Forgot our password?</Link>
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
    this.props.login(userInfo);
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

export default connect(mapStateToProps, { login })(
  reduxForm({
    form: 'loginForm'
  })(Login)
)

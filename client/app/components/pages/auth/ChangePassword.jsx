import React, { Component } from 'react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { changePassword, removeErrors } from '../../../actions/AuthAction';
import { isAuthenticated } from '../../../utils/AuthUtils';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import cookie from 'react-cookie';

class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null
    }
  }

  componentWillMount() {
    if (isAuthenticated()) {
      browserHistory.goBack();
    }
  }

  componentWillUnmount() {
    this.props.removeErrors();
  }

  componentDidMount() {
    const token = this.props.params && this.props.params.token;
    if (token){
      this.setState({token: token});
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
                    <h2 className="mb-50">CHANGE PASSWORD</h2>
                    <form
                      onSubmit={handleSubmit(this.submit.bind(this))}>
                      {this.renderErrors()}
                      <div className="login-account p-30 box-shadow">
                        <p>Please choose a new password.</p>
                        <Field
                          name="password"
                          type="password"
                          component="input"
                          placeholder="Password" />
                        <Field
                          name="password_confirmation"
                          type="password"
                          component="input"
                          placeholder="Password Confirmation" />
                        <button className="submit-btn-1" type="submit" disabled={pristine || submitting}>Submit</button>
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

  submit(passwordInfo) {
    this.props.changePassword({ ...passwordInfo, reset_password_token: this.state.token });
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

export default connect(mapStateToProps, { changePassword, removeErrors })(
  reduxForm({
    form: 'changePasswordForm'
  })(ChangePassword)
)

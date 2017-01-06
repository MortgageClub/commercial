import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { register, removeErrors, addError } from '../../../actions/AuthAction';
import { browserHistory } from 'react-router';
import { isAuthenticated } from '../../../utils/AuthUtils';
import { Link } from 'react-router';
import Recaptcha from 'react-recaptcha';
import cookie from 'react-cookie';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVerifyCaptcha: false
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
    const refCode = this.props.params && this.props.params.ref;
    if (refCode){
      var expires = new Date();
      expires = expires.setDate(expires.getDate() + 7);

      cookie.save("ref_code", refCode, {expires: new Date(expires)});
    }

    $(".recaptcha").attr("align", "center");
  }

  // Recaptcha
  verifyCallback(response){
    this.setState({
      isVerifyCaptcha: true
    })
  }

  expiredCallback(){
    this.setState({
      isVerifyCaptcha: false
    })
  }

  onloadCallback(){
    // console.log(this.state);
  }
  // end Recaptcha

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
                    <h2 className="mb-50">SIGN UP</h2>
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
                        <div className="row">
                          <div className="col-sm-6">
                            <Field
                              name="email"
                              type="email"
                              component="input"
                              placeholder="Email" />
                          </div>
                          <div className="col-md-6">
                            <Field
                              name="phone"
                              type="text"
                              component="input"
                              placeholder="Phone Number (optional)" />
                          </div>
                        </div>
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
                          <div className="col-sm-12">
                          <Field 
                            name="is_agree" 
                            component="input" 
                            type="checkbox"/>
                          <label style={{marginLeft: 5}}>I reviewed and agreed to <Link to="/terms-of-service">Terms of Service</Link> and <Link to="privacy-policy">Privacy Policy</Link>.</label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12 recaptcha">
                            <Recaptcha
                              sitekey="6Ldtiw8UAAAAAOoQGezu_74p2ZVNqZC0eQSOREkT"
                              render="explicit"
                              verifyCallback={this.verifyCallback.bind(this)}
                              expiredCallback={this.expiredCallback.bind(this)}
                              onloadCallback={this.onloadCallback.bind(this)}
                              />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-6">
                            <button className="submit-btn-1 mt-20" type="submit" disabled={pristine || submitting}>Sign up</button>
                          </div>
                          <div className="col-sm-6">
                            <button className="submit-btn-1 mt-20 f-right" type="reset" disabled={pristine} onClick={reset}>Clear</button>
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
    if(this.state.isVerifyCaptcha && userInfo.is_agree){
      this.props.register(userInfo);
    } else {
      let message = "";

      if(!userInfo.is_agree){
        message = "You must agree before signing up.";
      }else{
        if(!this.state.isVerifyCaptcha)
        message = "Please verify captcha before sign up.";
      }

      this.props.addError([{
        message: message
      }])
    }
  }

  renderErrors() {
    if (this.props.errorMessages) {
      const errors = this.props.errorMessages.map(error => {
        return (
        <li key={error.message}>{error.message}</li>
        )
      })
      return (
        <ul className="alert alert-danger list-unstyled">{errors}</ul>
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

export default connect(mapStateToProps, { register, removeErrors, addError })(
  reduxForm({
    form: 'registerForm'
  })(Register)
)


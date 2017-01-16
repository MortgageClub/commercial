import React, { Component } from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import { invite } from '../../../../actions/InviteByEmailAction';

class InviteByEmail extends Component {
  render() {
    const { handleSubmit, pristine, submitting } = this.props;

    return (
      <div className="invite-by-email-section">
        <h4 className="mt-20">2. Automated Invite by Blackline</h4>
        <div className="mb-20">
          Enter your referrals’ emails into the form and we’ll invite them on your behalf. You’ll be CC’ed on these emails.
        </div>
        <form onSubmit={handleSubmit(this.submit.bind(this))}>
          <div className="row">
            <div className="col-md-4 col-xs-12">
              <div className="">
                <h5>Email</h5>
                <Field
                  id="email_1"
                  name="email_1"
                  type="email"
                  component="input"
                  placeholder="" />
              </div>
            </div>
            <div className="col-md-4 col-xs-12">
              <div className="">
                <h5>Name</h5>
                <Field
                  id="name_1"
                  name="name_1"
                  type="text"
                  component="input"
                  placeholder="" />
              </div>
            </div>
            <div className="col-md-4 col-xs-12">
              <div className="">
                <h5>Phone (Optional)</h5>
                <Field
                  id="phone_1"
                  name="phone_1"
                  type="text"
                  component="input"
                  placeholder="" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 col-xs-12">
              <div className="">
                <h5>Email</h5>
                <Field
                  id="email_2"
                  name="email_2"
                  type="email"
                  component="input"
                  placeholder="" />
              </div>
            </div>
            <div className="col-md-4 col-xs-12">
              <div className="">
                <h5>Name</h5>
                <Field
                  id="name_2"
                  name="name_2"
                  type="text"
                  component="input"
                  placeholder="" />
              </div>
            </div>
            <div className="col-md-4 col-xs-12">
              <div className="">
                <h5>Phone (Optional)</h5>
                <Field
                  id="phone_2"
                  name="phone_2"
                  type="text"
                  component="input"
                  placeholder="" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 col-xs-12">
              <div className="">
                <h5>Email</h5>
                <Field
                  id="email_3"
                  name="email_3"
                  type="email"
                  component="input"
                  placeholder="" />
              </div>
            </div>
            <div className="col-md-4 col-xs-12">
              <div className="">
                <h5>Name</h5>
                <Field
                  id="name_3"
                  name="name_3"
                  type="text"
                  component="input"
                  placeholder="" />
              </div>
            </div>
            <div className="col-md-4 col-xs-12">
              <div className="">
                <h5>Phone (Optional)</h5>
                <Field
                  id="phone_3"
                  name="phone_3"
                  type="text"
                  component="input"
                  placeholder="" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 col-xs-12">
              <p><i className="fa fa-info-circle" aria-hidden="true"></i> For specific information regarding referral bonus, please email us at info@blacklinelending.com</p>
              <button className="submit-btn-1 mt-5" type="submit" disabled={submitting}>
                <i className="fa fa-paper-plane" aria-hidden="true"></i> SEND INVITES
              </button>
              <span style={{color: 'green', display: 'none', marginLeft: 20}} className="messageSuccess">Invites sent successfully!</span>
              <span style={{color: 'red', display: 'none', marginLeft: 20}} className="messageFail">Please fill out your referral info!</span>
            </div>
          </div>
        </form>
      </div>
    )
  }

  submit(inviteByEmail) {
    if(jQuery.isEmptyObject(inviteByEmail)){
      $(".messageFail").show().delay(5000).fadeOut();
    } else {
      this.props.invite(inviteByEmail);
      $(".messageSuccess").show().delay(5000).fadeOut();
    }
  }
}

function mapStateToProps(state) {
  return {
    invitedReferrals: state.inviteByEmail.invitedReferrals
  }
}

export default connect(mapStateToProps, {invite})(
  reduxForm({
    form: 'inviteByEmailForm'
  })(InviteByEmail)
)

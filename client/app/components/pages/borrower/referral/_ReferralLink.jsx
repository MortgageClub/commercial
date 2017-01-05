import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReferralLink extends Component {
  render() {
    const link = this.props.userInfo ? window.location.origin + "/sign-up?ref=" + this.props.userInfo.referral_code : "";
    const emailBody = "[Referral],\n\nI don't know if I've mentioned it before, but I've been working with Dane Chodos of Blackline Lending (www.blacklinelending.com) for commercial real estate loans. Given your financing needs, I thought you might also get a lot of value from their online lending platform.\n\n[Referral], meet Dane Chodos\nDane Chodos, meet [Referral]\n\nCan I leave the rest to you guys?\n\nTalk to you both later.";
    return (
      <div className="referral-section mt-20">
        <div className="row">
          <div className="col-md-12 col-xs-12">
            <div className="referral-link">
              <h4>Your Unique Referral Link:</h4>
              <form>
                <a href={link} target="_blank" style={{"color": "#0000EE", "fontSize": "14px"}}> Blackline Lending </a>
                <a className="submit-btn-1 mt-5 pull-right" href={"mailto:?bcc=referral@blacklinelending.com&cc=dane.chodos@blacklinelending.com&subject=Check out Blackline Lending&body=" + escape(emailBody)}>Add Link in Your Email</a>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    userInfo: state.auth.userInfo
  }
}

export default connect(mapStateToProps)(ReferralLink);

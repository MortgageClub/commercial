import React, { Component } from 'react';
import { connect } from 'react-redux';
import ClipboardButton from 'react-clipboard.js';

class ReferralLink extends Component {
  render() {
    const link = this.props.userInfo ? window.location.origin + "/sign-up?ref=" + this.props.userInfo.referral_code : "";

    return (
      <div className="referral-section mt-20">
        <div className="row">
          <div className="col-md-12 col-xs-12">
            <div className="referral-link">
              <h4>1. Share your unique referral link</h4>
              <div className="mb-10">Share your link (below) with clients, friends and family and make sure they sign up for their Blackline accounts using the right invite link.</div>
              <form>
                <a href={link} target="_blank" style={{"color": "#0000EE", "fontSize": "14px"}}> Blackline Lending </a>
                <ClipboardButton className="submit-btn-1 mt-5 pull-right clipboard-button" data-clipboard-text={link}>
                  Copy to Clipboard
                </ClipboardButton>
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

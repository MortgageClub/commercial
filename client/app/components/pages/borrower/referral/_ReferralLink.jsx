import React, { Component } from 'react';
import { connect } from 'react-redux';

const ClipboardButton = require('react-clipboard.js');

class ReferralLink extends Component {
  render() {
    const link = this.props.userInfo ? window.location.origin + "/sign-up?ref=" + this.props.userInfo.referral_code : "";
    return (
      <div className="referral-section">
        {/* SUBSCRIBE AREA START */}
        <div className="row">
          <div className="col-md-12 col-xs-12">
            <div className="referral-link">
              <h4>Your Unique Referral Link:</h4>
              <form>
                <a href={link} target="_blank" style={{"color": "#0000EE", "fontSize": "18px"}}> Blackline Lending </a>
                <ClipboardButton className="submit-btn-1 mt-5 pull-right" data-clipboard-text={link}>
                  Copy to Clipboard
                </ClipboardButton>
              </form>
            </div>
          </div>
        </div>
        {/* SUBSCRIBE AREA END */}
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

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { getAll } from '../../../../actions/InviteByEmailAction';
import { isAuthenticated } from '../../../../utils/AuthUtils';

class ReferralResults extends Component {
  componentDidMount() {
    if(isAuthenticated()){
      this.props.getAll();
    }else{
      browserHistory.push('');
    }
  }

  render() {
    return (
      <div className="referral-results-section mt-70">
        <div className="row">
          <div className="col-md-12 col-xs-12">
            <h4>YOUR REFERRALS</h4>
            <div className="mb-10">
              Your referrals will appear here once they've joined Blackline. You can also keep track of your referral bonus. For any missing referral or specific information regarding our referral program, please email us at <a href="mailto:referral@blacklinelending.com">referral@blacklinelending.com</a>.
            </div>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Joined</th>
                    <th>Our Origination Fees</th>
                    <th>Your Referral Bonus</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.props.newInvitedReferrals && this.props.newInvitedReferrals.map(referral => this.renderInvitedReferral(referral))
                  }
                  {
                    this.props.invitedReferrals && this.props.invitedReferrals.map(referral => this.renderInvitedReferral(referral))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderInvitedReferral(referral) {
    return (
      <tr key={referral.id}>
        <td>{referral.email}</td>
        <td>{referral.name}</td>
        <td>{referral.joined_at}</td>
        <td>{referral.origination_fees}</td>
        <td>{referral.bonus}</td>
      </tr>
    )
  }
}

function mapStateToProps(state) {
  return {
    newInvitedReferrals: state.inviteByEmail.newInvitedReferrals,
    invitedReferrals: state.inviteByEmail.invitedReferrals
  }
}

export default connect(mapStateToProps, { getAll })(ReferralResults)

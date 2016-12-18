import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { getAll } from '../../../../actions/InviteByEmailAction';

class ReferralResults extends Component {
    componentDidMount() {
        if(window.localStorage.getItem('auth') !== null){
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
                        <div className="">
                            <h3>Your Referrals</h3>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Email</th>
                                        <th>Name</th>
                                        <th>Joined</th>
                                        <th>#Loans Closed</th>
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
                <td>1</td>
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

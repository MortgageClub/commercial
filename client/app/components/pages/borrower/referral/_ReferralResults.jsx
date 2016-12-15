import React, { Component } from 'react';

class ReferralResults extends Component {
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
                                    <tr className="">
                                        <td>leo@hipvan.com</td>
                                        <td>Leo Le</td>
                                        <td>-</td>
                                        <td>1</td>
                                    </tr>
                                    <tr className="active">
                                        <td>tangnguyen@hipvan.com</td>
                                        <td>Tang Nguyen</td>
                                        <td>-</td>
                                        <td>1</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ReferralResults;

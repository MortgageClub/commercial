import React, { Component } from 'react';

class ReferralLink extends Component {
    render() {
        return (
            <div className="referral-section">
                {/* SUBSCRIBE AREA START */}
                <div className="row">
                    <div className="col-md-12 col-xs-12">
                        <div className="referral-link">
                            <h4>Your referral Link:</h4>
                            <form action="#">
                                <input type="text" id="referral-link" name="referral_link" value="https://stg-mortgageclub.herokuapp.com/?refcode=c8d7a5c5-3e7a-416f-8b64-1adc6f3bcda4" placeholder="Your referral code" />
                                <button className="submit-btn-1 mt-5">
                                    <i className="fa fa-link" aria-hidden="true"></i> Copy to Clipboard
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                {/* SUBSCRIBE AREA END */}
            </div>
        )
    }
}

export default ReferralLink;

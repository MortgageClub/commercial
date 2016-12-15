import React, { Component } from 'react';

class ReferralLink extends Component {
    render() {
        return (
            <div>
                {/* SUBSCRIBE AREA START */}
                <div className="row">
                    <div className="col-md-12 col-xs-12">
                        <div className="subscribe">
                            <form action="#">
                                <input type="text" name="subscribe" placeholder="Your referral code" value="https://stg-mortgageclub.herokuapp.com/?refcode=c8d7a5c5-3e7a-416f-8b64-1adc6f3bcda4"/>
                                <button type="submit" value="send">Copy to Clipboard</button>
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

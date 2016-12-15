import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import ReferralLink from './_ReferralLink';

class Referral extends Component {
    render() {
        return (
            <div>
                {/* Start page content */}
                <section id="page-content" className="page-wrapper">
                    <div className="referral-section pt-115 pb-70">
                        <div className="container">
                            <ReferralLink/>
                        </div>
                    </div>
                </section>
                {/* End page content */}
            </div>
        )
    }
}

export default Referral;
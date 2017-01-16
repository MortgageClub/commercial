import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { isAuthenticated } from '../../../../utils/AuthUtils';
import ReferralLink from './_ReferralLink';
import InviteByEmail from './_InviteByEmail';
import ReferralProgramHeader from './_ReferralProgramHeader';
import ReferralResults from './_ReferralResults';
import { browserHistory } from 'react-router';

class Referral extends Component {
  componentDidMount() {
    if (!isAuthenticated()) {
      browserHistory.push("/sign-up");
    }
  }

  render() {
    return (
      <div>
        <section id="page-content" className="page-wrapper">
          <div className="pt-90 pb-70 referral-dashboard">
            <div className="container">
              <ReferralProgramHeader/>
              <h4 className="mt-30">2 EASY WAYS TO SPREAD THE WORD AND SCORE EXTRA CASH</h4>
              <ReferralLink/>
              <InviteByEmail/>
              <ReferralResults/>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Referral;

// <div className="text-center">
//   <iframe className="iframe-youtube" src="https://www.youtube.com/embed/Llw9Q6akRo4" frameBorder="0" allowFullScreen></iframe>
// </div>
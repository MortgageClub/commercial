import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import ReferralLink from './_ReferralLink';
import InviteByEmail from './_InviteByEmail';
import ReferralProgramHeader from './_ReferralProgramHeader';
import ReferralResults from './_ReferralResults';


class Referral extends Component {
  render() {
    return (
      <div>
        <section id="page-content" className="page-wrapper">
          <div className="pt-115 pb-70">
            <div className="container">
              <ReferralProgramHeader/>
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
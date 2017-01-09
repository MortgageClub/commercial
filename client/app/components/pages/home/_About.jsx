import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div>
        {/* ABOUT SHELTEK AREA START */}
        <div className="about-sheltek-area pb-115">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-xs-12">
                <div className="section-title mb-30">
                  <h3>SOME WORDS </h3>
                  <h2>ABOUT BLACKLINE LENDING</h2>
                </div>
                <div className="about-sheltek-info">
                  <p><span className="tooltip-content">Blackline Lending</span> is a technology-driven lending platform that provides commercial real estate investors with easy access to competitive loan programs. Our lending sources include regional and national banks, credit unions, life insurance companies, CMBS, and CTL financiers.</p>
                  <p>We offer fixed-rate loan terms from 5 to 20 years, amortization up to 30 years, up to 75% LTV, loan amounts from $500k to $15M nationwide. We currently have aggressive lending programs available for a vast majority of nationally recognized tenants including Walgreens, CVS and Rite Aid.</p>
                </div>
              </div>
              <div className="col-sm-6 col-xs-12">
                <div className="about-image">
                  <a><img src="/images/some_words_about_blackline.png"/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ABOUT SHELTEK AREA END */}
      </div>
    )
  }
}

export default About;

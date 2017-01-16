import React, { Component } from 'react';

class About extends Component {
  componentDidMount() {
    sr.reveal('.about-sheltek-area');
  }

  render() {
    return (
      <div>
        {/* ABOUT SHELTEK AREA START */}
        <div className="about-sheltek-area pb-115 pt-90">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-xs-12">
                <div className="section-title mb-30">
                  <h3>SOME WORDS </h3>
                  <h2>ABOUT BLACKLINE LENDING</h2>
                </div>
                <div className="about-sheltek-info">
                  <p>We are a technology-driven lending platform built for commercial real estate investors. With optimizing software and first-rate lenders, we provide easy access to competitive loan programs. Lending sources include regional and national banks, credit unions, life insurance companies, CMBs, and CTL financiers.</p>
                  <ul>
                    <li>Fixed rate loan terms from 5 to 20 years</li>
                    <li>Up to 75% LTV</li>
                    <li>Amortization up to 30 years</li>
                    <li>Loans from $500K to $15M nationwide</li>
                  </ul>
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

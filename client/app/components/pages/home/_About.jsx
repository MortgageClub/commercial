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
                  <h3>SOME WORD </h3>
                  <h2>ABOUT BLACKLINE EQUITY</h2>
                </div>
                <div className="about-sheltek-info">
                  <p><span data-placement="top" data-toggle="tooltip" data-original-title="The name you can trust" className="tooltip-content">Blackline Equity</span> is a licensed commercial mortgage broker that uses people and software to manage the complexity of commercial loans.Our team consists of seasoned professionals from the worlds of technology, lending, commercial real estate, banking and investing, all working together to build software to replace manual processes, streamlining your way to a better commercial real estate loan.</p>
                  <p>We offer fixed-rate loan terms from 5 to 20 years, amortization up to 30 years, up to 75% LTV, loan amounts from $500k to $10M nationwide. We currently have aggressive lending programs available for a vast majority of nationally recognized tenants including Walgreens, CVS and Rite Aid.</p>
                </div>
              </div>
              <div className="col-sm-6 col-xs-12">
                <div className="about-image">
                  <a href="about.html"><img src="/images/about/1.jpg" alt=""/></a>
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
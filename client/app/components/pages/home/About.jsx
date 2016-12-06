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
                  <p><span data-placement="top" data-toggle="tooltip" data-original-title="The name you can trust" className="tooltip-content">Blackline Equity</span> is one of the nation’s fastest growing providers of commercial real estate financing services. Our team consists of seasoned professionals from the worlds of technology, lending, commercial real estate, banking and investing, all working together to build software to replace manual processes, streamlining your way to a better commercial real estate loan.</p>
                  <p>Our employees drive our success. If an intellectually challenging environment coupled with an evolving task appeals to you please contact us regarding current opportunities.</p>
                </div>
              </div>
              <div className="col-sm-6 col-xs-12">
                <div className="about-image">
                  <a href="about.html"><img src="images/about/1.jpg" alt=""/></a>
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

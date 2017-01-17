import React, { Component } from 'react';
import { track } from '../../../utils/MixPanelUtils';

class Services extends Component {
  componentDidMount() {
    track("View Services Page");
  }

  render() {
    return (
      <div>
        <div className="features-area-2 pt-115 pb-50">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-title-2 text-center">
                  <h2>THE BLACKLINE ADVANTAGE</h2>
                  <p>We started Blackline Lending with a simple goal in mind: to help you find the best loan for your commercial real estate investment.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="features-includes-2">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-4">
                      <div className="features-include-list">
                        <h6><img src="images/icons/7.png" />NATIONAL PLATFORM</h6>
                        <p>We lend in all 50 states, specializing in $500K-$10M loans.</p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-4">
                      <div className="features-include-list">
                        <h6><img src="images/icons/7.png" />STREAMLINED SERVICE</h6>
                        <p>Technology streamlines the process while keeping you at the core of the experience.</p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-4">
                      <div className="features-include-list">
                        <h6><img src="images/icons/7.png" />DEDICATED TEAM</h6>
                        <p>Licensed loan advisors work around the clock to ensure that your loan goes smoothly.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src="/images/services.png" width="100%"/>
        </div>
        <div className="properties-video-area pb-115 pt-60">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-title-2 text-center">
                  <h2>10-POINT TIMELINE</h2>
                  <p>Timeliness and certainty of execution are critical to deal success. Our team continuously monitors the status of the loan and keeps you informed throughout the process.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <div className="author-quote">
                  <p>Start conversation so we understand your investment goals and motivations</p>
                  <p>Complete loan request form and provide necessary documentation</p>
                  <p>We assemble loan package, which markets the deal</p>
                  <p>We submit loan package to our funding sources</p>
                  <p>Receive letter of interest from lender detailing terms and conditions of loan</p>
                  <p>Approve terms of loan</p>
                  <p>We order appraisal and other 3rd party reports</p>
                  <p>Final underwriting and lender commitment</p>
                  <p>Review and sign loan documents</p>
                  <p>Loan is closed, funding complete</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="licensed loan officers bg-blue call-to-bg plr-140 pt-75">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3 col-sm-4 col-xs-12">
                <div className="section-title text-white">
                  <h3>POWERED BY</h3>
                  <h2 className="h1">DATA</h2>
                </div>
              </div>
              <div className="col-md-9 col-sm-8 col-xs-12">
                <div className="booking-conternt  clearfix">
                  <div className="counter-content">
                    <div className="counter-item">
                      <h2>
                      <i className="fa fa-home" aria-hidden="true"></i>
                      <span className="counter">8M</span>
                      </h2>
                      <p>Property Profiles</p>
                    </div>
                    <div className="counter-item">
                      <h2>
                      <i className="fa fa-key" aria-hidden="true"></i>
                      <span className="counter">500+</span>
                      </h2>
                      <p>Funding Sources</p>
                    </div>
                    <div className="counter-item">
                      <h2>
                      <i className="fa fa-smile-o" aria-hidden="true"></i>
                      <span className="counter">25K</span>
                      </h2>
                      <p>Lines of Code</p>
                    </div>
                  </div>
                  <div className="booking-imgae">
                    <img src="images/powered_by_data.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Services


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
                  <p>Blackline Lending has a simple purpose: to help you find the best loan for your commercial property.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="features-includes-2">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-4">
                      <div className="features-include-list">
                        <h6><img src="images/icons/7.png" alt="" />NATIONAL PLATFORM</h6>
                        <p>We lend in all 50 states specializing in $500k-$10M loans.</p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-4">
                      <div className="features-include-list">
                        <h6><img src="images/icons/7.png" alt="" />STREAMLINED SERVICE</h6>
                        <p>We’ve build a streamlined borrower experience with you, the property owner, at the core.</p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-4">
                      <div className="features-include-list">
                        <h6><img src="images/icons/7.png" alt="" />TECHNOLOGY & PEOPLE</h6>
                        <p>Our technology and licensed Loan Advisors work around the clock to make sure your loan goes smoothly.</p>
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
                  <h2>10 POINT TIMELINE OVERVIEW</h2>
                  <p>At Blackline we understand that timeliness and certainty of execution are critical to deal success. Once you engage our services we will work closely with you to keep you informed. Our team continually monitors the status of the loan process from ordering appraisals to the signing of loan documents. You can find a general overview of the process below:</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <div className="author-quote">
                  <p>Begin with a conversation to understand investment goals and motivations</p>
                  <p>After establishing goals the client completes a loan request form and provides necessary documentation</p>
                  <p>Blackline assembles a loan package which markets the deal</p>
                  <p>We submit the loan package to our funding sources</p>
                  <p>Letter of Interest from lender which details terms and conditions of loan</p>
                  <p>Client approves terms</p>
                  <p>Order 3rd party reports</p>
                  <p>Final underwriting and lender commitment</p>
                  <p>Loan documents sent out for review and signing</p>
                  <p>Loan closes and funding is completed</p>
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


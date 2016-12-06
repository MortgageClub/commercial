import React, { Component } from 'react';

class HowItWorks extends Component {
  render() {
    return (
      <div>
        {/* SERVICES AREA START */}
        <div className="services-area pb-60 pt-115">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-title-2 text-center">
                  <h2>HOW IT WORKS</h2>
                  <p>Sheltek is the best theme for  elit, sed do eiusmod tempor dolor sit amet, conse ctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et lorna aliquatd minim veniam, quis nostrud</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="service-carousel">
                {/* service-item */}
                <div className="col-md-12">
                  <div className="service-item">
                    <div className="service-item-image">
                      <a href="service-details.html"><img src="images/service/1.jpg" alt=""/></a>
                    </div>
                    <div className="service-item-info">
                      <h5><a href="service-details.html">Get Your Quotes</a></h5>
                      <p>Tell us about your scenario and we’ll find you at least 3 competitive quotes from our partner lenders.</p>
                    </div>
                  </div>
                </div>
                {/* service-item */}
                <div className="col-md-12">
                  <div className="service-item">
                    <div className="service-item-image">
                      <a href="service-details.html"><img src="images/service/2.jpg" alt=""/></a>
                    </div>
                    <div className="service-item-info">
                      <h5><a href="service-details.html">Negotiate</a></h5>
                      <p>We help you negotiate the best rates and terms.</p>
                    </div>
                  </div>
                </div>
                {/* service-item */}
                <div className="col-md-12">
                  <div className="service-item">
                    <div className="service-item-image">
                      <a href="service-details.html"><img src="images/service/3.jpg" alt=""/></a>
                    </div>
                    <div className="service-item-info">
                      <h5><a href="service-details.html">Apply</a></h5>
                      <p>We structure your loan package and present to the lender.</p>
                    </div>
                  </div>
                </div>
                {/* service-item */}
                <div className="col-md-12">
                  <div className="service-item">
                    <div className="service-item-image">
                      <a href="service-details.html"><img src="images/service/4.jpg" alt=""/></a>
                    </div>
                    <div className="service-item-info">
                      <h5><a href="service-details.html">Underwriting</a></h5>
                      <p>Final underwriting and lender commitment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* SERVICES AREA END */}
      </div>
    )
  }
}

export default HowItWorks;

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
                      <a href="service-details.html"><img src="/images/service/1.jpg" alt=""/></a>
                    </div>
                    <div className="service-item-info">
                      <h5><a href="service-details.html">Shop</a></h5>
                      <p>We’ll find you at least 3 competitive quotes for your scenario.</p>
                    </div>
                  </div>
                </div>
                {/* service-item */}
                <div className="col-md-12">
                  <div className="service-item">
                    <div className="service-item-image">
                      <a href="service-details.html"><img src="/images/service/2.jpg" alt=""/></a>
                    </div>
                    <div className="service-item-info">
                      <h5><a href="service-details.html">Apply</a></h5>
                      <p>We structure your loan package and present it to the lender.</p>
                    </div>
                  </div>
                </div>
                {/* service-item */}
                <div className="col-md-12">
                  <div className="service-item">
                    <div className="service-item-image">
                      <a href="service-details.html"><img src="/images/service/3.jpg" alt=""/></a>
                    </div>
                    <div className="service-item-info">
                      <h5><a href="service-details.html">Underwrite</a></h5>
                      <p>Final underwriting and lender commitment.</p>
                    </div>
                  </div>
                </div>
                {/* service-item */}
                <div className="col-md-12">
                  <div className="service-item">
                    <div className="service-item-image">
                      <a href="service-details.html"><img src="/images/service/4.jpg" alt=""/></a>
                    </div>
                    <div className="service-item-info">
                      <h5><a href="service-details.html">Closing</a></h5>
                      <p>Loan closes and funding is completed.</p>
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

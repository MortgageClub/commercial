import React, { Component } from 'react';

class HowItWorks extends Component {
  componentDidMount() {
    sr.reveal('.how-it-works-title');
  }

  render() {
    return (
      <div>
        {/* HOW IT WORKS AREA START */}
        <div className="services-area pb-60">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-title-2 text-center how-it-works-title">
                  <h2>HOW IT WORKS</h2>
                  <p>Access a diverse array of loan products and terms, transparent application and underwriting processes, quick funding timelines, and a first-class client experience.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="service-carousel">
                {/* service-item */}
                <div className="col-md-12">
                  <div className="service-item">
                    <div className="service-item-image">
                      <a><img src="/images/how_it_works_1.png" /></a>
                    </div>
                    <div className="service-item-info">
                      <h5><a>Shop</a></h5>
                      <p>Get at least 3 competitive quotes for your scenario.</p>
                    </div>
                  </div>
                </div>
                {/* service-item */}
                <div className="col-md-12">
                  <div className="service-item">
                    <div className="service-item-image">
                      <a><img src="/images/how_it_works_2.png" /></a>
                    </div>
                    <div className="service-item-info">
                      <h5><a>Apply</a></h5>
                      <p>We structure and present your package to our lending sources.</p>
                    </div>
                  </div>
                </div>
                {/* service-item */}
                <div className="col-md-12">
                  <div className="service-item">
                    <div className="service-item-image">
                      <a><img src="/images/how_it_works_3.png" /></a>
                    </div>
                    <div className="service-item-info">
                      <h5><a>Underwrite</a></h5>
                      <p>Final underwriting and lender commitment.</p>
                    </div>
                  </div>
                </div>
                {/* service-item */}
                <div className="col-md-12">
                  <div className="service-item">
                    <div className="service-item-image">
                      <a><img src="/images/how_it_works_4.png" /></a>
                    </div>
                    <div className="service-item-info">
                      <h5><a>Closing</a></h5>
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

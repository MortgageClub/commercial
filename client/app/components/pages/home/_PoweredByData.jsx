import React, { Component } from 'react';

class PoweredByData extends Component {
  render() {
    return (
      <div className="booking-area bg-1 call-to-bg plr-140 pt-75">
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
                  <img src="images/others/booking.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PoweredByData


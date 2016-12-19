import React, { Component } from 'react';

class Branch extends Component {
  render() {
    return (
      <div>
        {/* BRAND AREA START */}
        <div className="brand-area pb-115">
          <div className="container">
            <div className="row">
              <div className="brand-carousel">
                <div className="col-md-12">
                  <div className="brand-item">
                    <img src="/images/brand/walgreens.png"/>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="brand-item">
                    <img src="/images/brand/cvs.png"/>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="brand-item">
                    <img src="/images/brand/dollar_general.png"/>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="brand-item">
                    <img src="/images/brand/mc_donalds.png"/>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="brand-item">
                    <img src="/images/brand/autozone.png"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* BRAND AREA END */}
      </div>
    )
  }
}

export default Branch;

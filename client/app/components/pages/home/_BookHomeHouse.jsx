import React, { Component } from 'react';

class BookHomeHouse extends Component {
  render() {
    return (
      <div>
        {/* BOOKING AREA START */}
        <div className="booking-area bg-blue call-to-bg plr-140 pt-75 pbt-115">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3 col-sm-4 col-xs-12">
                <div className="section-title text-white">
                  <h3>FIND YOUR</h3>
                  <h2 className="h1">LOAN HERE</h2>
                </div>
              </div>
              <div className="col-md-9 col-sm-8 col-xs-12">
                <div className="booking-conternt clearfix">
                  <div className="book-house text-white">
                    <h2>GET AT LEAST 3 COMPETITIVE QUOTES </h2>
                    <h2 className="h5">CALL US ON : (800) 929-0168</h2>
                  </div>
                  <div className="booking-imgae">
                    <img src="/images/call_us.png" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* BOOKING AREA END */}
      </div>
    )
  }
}

export default BookHomeHouse;

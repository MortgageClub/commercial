import React, { Component } from 'react';

class BookHomeHouse extends Component {
  render() {
    return (
      <div>
        {/* BOOKING AREA START */}
        <div className="booking-area bg-1 call-to-bg plr-140 pt-75 pbt-115">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3 col-sm-4 col-xs-12">
                <div className="section-title text-white">
                  <h3>BOOK YOUR</h3>
                  <h2 className="h1">HOME HERE</h2>
                </div>
              </div>
              <div className="col-md-9 col-sm-8 col-xs-12">
                <div className="booking-conternt clearfix">
                  <div className="book-house text-white">
                    <h2>BOOK YOUR APPARTMENT OR HOUSE </h2>
                    <h2 className="h5">CALL US ON : +0123  456  789  </h2>
                  </div>
                  <div className="booking-imgae">
                    <img src="images/others/booking.png" alt=""/>
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
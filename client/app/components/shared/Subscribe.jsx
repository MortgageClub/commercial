import React, { Component } from 'react';

class Subscribe extends Component {
  render() {
    return (
      <div>
        {/* SUBSCRIBE AREA START */}
        <div className="subscribe-area bg-blue call-to-bg plr-140 ptb-50">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3 col-sm-4 col-xs-12">
                <div className="section-title text-white">
                  <h3>SUBSCRIBE</h3>
                  <h2 className="h1">NEWSLETTER</h2>
                </div>
              </div>
              <div className="col-md-9 col-sm-8 col-xs-12">
                <div className="subscribe">
                  <form action="#">
                    <input type="text" name="subscribe" placeholder="Enter your email here..."/>
                    <button type="submit" value="send">Send</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* SUBSCRIBE AREA END */}
      </div>
    )
  }
}

export default Subscribe;

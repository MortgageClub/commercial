import React, { Component } from 'react';

class Transactions extends Component {
  componentDidMount() {
    sr.reveal('.transaction-section-title');
  }

  render() {
    return (
      <div>
        {/* SERVICES AREA START */}
        <div className="services-area pb-60 pt-115">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-title-2 text-center transaction-section-title">
                  <h2>RECENT TRANSACTIONS</h2>
                  <p>Every commercial real estate loan is unique. Your needs dictate how we utilize our market expertise.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="transaction-carousel">
                {/* service-item */}
                <div className="col-md-12">
                  <div className="service-item">
                    <div className="service-item-image">
                      <a><img src="/images/recent_transaction_1.jpg" /></a>
                    </div>
                    <div className="service-item-info">
                      <h5><a>IHOP</a></h5>
                      <table>
                        <tbody>
                          <tr>
                            <td>Property Type</td>
                            <td>Retail</td>
                          </tr>
                          <tr>
                            <td>Location</td>
                            <td>NM</td>
                          </tr>
                          <tr>
                            <td>Loan Amount</td>
                            <td>$2,100,000</td>
                          </tr>
                          <tr>
                            <td>LTV</td>
                            <td>60%</td>
                          </tr>
                          <tr>
                            <td>Spread</td>
                            <td>275 bps</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* service-item */}
                <div className="col-md-12">
                  <div className="service-item">
                    <div className="service-item-image">
                      <a><img src="/images/recent_transaction_2.png" /></a>
                    </div>
                    <div className="service-item-info">
                      <h5><a>FLOWER FOODS</a></h5>
                      <table>
                        <tbody>
                          <tr>
                            <td>Property Type</td>
                            <td>Industrial</td>
                          </tr>
                          <tr>
                            <td>Location</td>
                            <td>AL</td>
                          </tr>
                          <tr>
                            <td>Loan Amount</td>
                            <td>$820,000</td>
                          </tr>
                          <tr>
                            <td>LTV</td>
                            <td>80%</td>
                          </tr>
                          <tr>
                            <td>Spread</td>
                            <td>250 bps</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* service-item */}
                <div className="col-md-12">
                  <div className="service-item">
                    <div className="service-item-image">
                      <a><img src="/images/recent_transaction_3.jpg" /></a>
                    </div>
                    <div className="service-item-info">
                      <h5><a>CVS</a></h5>
                      <table>
                        <tbody>
                          <tr>
                            <td>Property Type</td>
                            <td>Retail</td>
                          </tr>
                          <tr>
                            <td>Location</td>
                            <td>AZ</td>
                          </tr>
                          <tr>
                            <td>Loan Amount</td>
                            <td>$4,468,000</td>
                          </tr>
                          <tr>
                            <td>LTV</td>
                            <td>75%</td>
                          </tr>
                          <tr>
                            <td>Spread</td>
                            <td>175 bps</td>
                          </tr>
                        </tbody>
                      </table>
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

export default Transactions;


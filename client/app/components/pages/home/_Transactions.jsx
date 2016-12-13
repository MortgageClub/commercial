import React, { Component } from 'react';

class Transactions extends Component {
  render() {
    return (
      <div>
        {/* SERVICES AREA START */}
        <div className="services-area pb-60 pt-115">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-title-2 text-center">
                  <h2>RECENT TRANSACTIONS</h2>
                  <p>Each transaction is unique and our clients’ needs dictate how we utilize our market expertise, resulting in an optimal financing structure for your real estate investment.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="transaction-carousel">
                {/* service-item */}
                <div className="col-md-12">
                  <div className="service-item">
                    <div className="service-item-image">
                      <a href="single-blog.html" tabindex="0"><img src="/images/blog/1.jpg" alt=""/></a>
                    </div>
                    <div className="service-item-info">
                      <h5><a href="service-details.html">RACETRAC</a></h5>
                      <table>
                        <tbody>
                          <tr>
                            <td>Property Type</td>
                            <td>Retail</td>
                          </tr>
                          <tr>
                            <td>Location</td>
                            <td>FL</td>
                          </tr>
                          <tr>
                            <td>Loan Amount</td>
                            <td>$2,150,000</td>
                          </tr>
                          <tr>
                            <td>LTV</td>
                            <td>60%</td>
                          </tr>
                          <tr>
                            <td>Rate</td>
                            <td>4.20%</td>
                          </tr>
                          <tr>
                            <td>Term</td>
                            <td>7 years</td>
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
                      <a href="single-blog.html" tabindex="0"><img src="/images/blog/1.jpg" alt=""/></a>
                    </div>
                    <div className="service-item-info">
                      <h5><a href="service-details.html">RITE AID</a></h5>
                      <table>
                        <tbody>
                          <tr>
                            <td>Property Type</td>
                            <td>Retail</td>
                          </tr>
                          <tr>
                            <td>Location</td>
                            <td>FL</td>
                          </tr>
                          <tr>
                            <td>Loan Amount</td>
                            <td>$2,150,000</td>
                          </tr>
                          <tr>
                            <td>LTV</td>
                            <td>60%</td>
                          </tr>
                          <tr>
                            <td>Rate</td>
                            <td>4.20%</td>
                          </tr>
                          <tr>
                            <td>Term</td>
                            <td>7 years</td>
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
                      <a href="single-blog.html" tabindex="0"><img src="/images/blog/1.jpg" alt=""/></a>
                    </div>
                    <div className="service-item-info">
                      <h5><a href="service-details.html">IHOPE</a></h5>
                      <table>
                        <tbody>
                          <tr>
                            <td>Property Type</td>
                            <td>Retail</td>
                          </tr>
                          <tr>
                            <td>Location</td>
                            <td>FL</td>
                          </tr>
                          <tr>
                            <td>Loan Amount</td>
                            <td>$2,150,000</td>
                          </tr>
                          <tr>
                            <td>LTV</td>
                            <td>60%</td>
                          </tr>
                          <tr>
                            <td>Rate</td>
                            <td>4.20%</td>
                          </tr>
                          <tr>
                            <td>Term</td>
                            <td>7 years</td>
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


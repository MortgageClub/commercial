import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuotesTab extends Component {
  render() {

    return (
      <div className="quotes-list">
        <table width="100%">
          <tbody>
            <tr>
              <td className="quote">
                <header className="quote-header">
                  <h6>HIGHEST LTV</h6>
                  <div className="quote-price">
                    $1,100,000
                  </div>
                </header>

                <div className="quote-body">
                  <ul className="quote-features">
                    <li><em>3.50%</em> Interest Rate</li>
                    <li><em>75%</em> LTV</li>
                    <li><em>5</em> Year Term</li>
                    <li><em>20</em> Year Amortization</li>
                    <li><em>$3,543/month</em> Payment</li>
                  </ul>
                </div>

                <footer className="quote-footer">
                  <button>Select</button>
                </footer>
              </td>

              <td className="quote active">
                <header className="quote-header">
                  <h6>LOWEST PAYMENT</h6>
                  <div className="quote-price">
                    $1,000,000
                  </div>
                </header>

                <div className="quote-body">
                  <ul className="quote-features">
                    <li><em>5.13%</em> Interest Rate</li>
                    <li><em>70%</em> LTV</li>
                    <li><em>5</em> Year Term</li>
                    <li><em>20</em> Year Amortization</li>
                    <li><em>$2,843/month</em> Payment</li>
                  </ul>
                </div>

                <footer className="quote-footer">
                  <button>Select</button>
                </footer>
              </td>

              <td className="quote">
                <header className="quote-header">
                  <h6>LOWEST RATE</h6>
                  <div className="quote-price">
                    $1,000,000
                  </div>
                </header>

                <div className="quote-body">
                  <ul className="quote-features">
                    <li><em>4.10%</em> Interest Rate</li>
                    <li><em>70%</em> LTV</li>
                    <li><em>5</em> Year Term</li>
                    <li><em>20</em> Year Amortization</li>
                    <li><em>$2,843/month</em> Payment</li>
                  </ul>
                </div>

                <footer className="quote-footer">
                  <button>Select</button>
                </footer>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    loan: state.dashboard.loan
  };
}

export default connect(mapStateToProps)(QuotesTab)


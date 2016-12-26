import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuotesTab extends Component {
  render() {
    return (
      <div className="quotes-list">
        <table width="100%">
          <tbody>
            <tr>
            {
              this.props.loan && this.props.loan.quotes && this.props.loan.quotes.map(quote => this.renderQuote(quote))
            }
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

  renderQuote(quote) {
    return (
      <td className="quote" key={quote.id}>
        <header className="quote-header">
          <h6>{quote.name}</h6>
          <div className="quote-price">
            {quote.amount}
          </div>
        </header>

        <div className="quote-body">
          <ul className="quote-features">
            <li><em>{quote.interest_rate}</em> Interest Rate</li>
            <li><em>{quote.ltv}</em> LTV</li>
            <li><em>{quote.year_term}</em> Years Term</li>
            <li><em>{quote.year_amortization}</em> Years Amortization</li>
            <li><em>{quote.monthly_payment}/month</em> Payment</li>
          </ul>
        </div>

        <footer className="quote-footer">
          <button>Select</button>
        </footer>
      </td>
    )
  }
}

function mapStateToProps(state) {
  return {
    loan: state.dashboard.loan
  };
}

export default connect(mapStateToProps)(QuotesTab)


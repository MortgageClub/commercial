import React, { Component } from 'react';
import { connect } from 'react-redux';
import { select } from '../../../../../../actions/QuoteAction';

class QuotesTab extends Component {
  render() {
    return (
      <div className="quotes-list table-responsive">
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
    const activeClass = quote.status == "open" ? "" : "active";
    return (
      <td className={"quote " + activeClass} key={quote.id} onClick={this.select.bind(this, quote.id)}>
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
            <li><em>{quote.year_term}</em> Year Term</li>
            <li><em>{quote.year_amortization}</em> Year Amortization</li>
            <li><em>{quote.monthly_payment}</em> Monthly Payment</li>
          </ul>
        </div>

        <footer className="quote-footer">
          <button>Select</button>
        </footer>
      </td>
    )
  }

  select(quoteId) {
    this.props.select(quoteId);
  }
}

function mapStateToProps(state) {
  return {
    loan: state.dashboard.loan
  };
}

export default connect(mapStateToProps, { select })(QuotesTab)


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { select } from '../../../../../../actions/QuoteAction';

class QuotesTab extends Component {
  render() {
    return (
      <div className="quotes-list table-responsive">
        <table width="100%">
          <tbody>
            {
              this.props.loan 
              ? 
                this.props.loan.is_showed_guide != true 
                ? 
                  this.renderSampleData()
                :
                  <tr>
                    { this.props.loan.quotes && this.props.loan.quotes.map(quote => this.renderQuote(quote)) }
                  </tr>
              :
                null
            }
          </tbody>
        </table>
      </div>
    )
  }

  renderSampleData() {
    return (
      <tr>
        <td className="quote active" key={1}>
          <header className="quote-header">
            <h6>HIGHEST LTV</h6>
            <div className="quote-price">
              $1,875,000
            </div>
          </header>

          <div className="quote-body">
            <ul className="quote-features">
              <li><em>4.23%</em> Interest Rate</li>
              <li><em>75%</em> LTV</li>
              <li><em>5</em> Year Term</li>
              <li><em>25</em> Year Amortization</li>
              <li><em>$10,874</em> Monthly Payment</li>
            </ul>
          </div>

          <footer className="quote-footer">
            <button>Select</button>
          </footer>
        </td>
        <td className="quote" key={2}>
          <header className="quote-header">
            <h6>LOWEST PAYMENT</h6>
            <div className="quote-price">
              $1,875,000
            </div>
          </header>

          <div className="quote-body">
            <ul className="quote-features">
              <li><em>4.66%</em> Interest Rate</li>
              <li><em>75%</em> LTV</li>
              <li><em>5</em> Year Term</li>
              <li><em>30</em> Year Amortization</li>
              <li><em>$9,679</em> Monthly Payment</li>
            </ul>
          </div>

          <footer className="quote-footer">
            <button>Select</button>
          </footer>
        </td>
        <td className="quote" key={3}>
          <header className="quote-header">
            <h6>LOWEST RATE</h6>
            <div className="quote-price">
              $1,750,000
            </div>
          </header>

          <div className="quote-body">
            <ul className="quote-features">
              <li><em>3.50%</em> Interest Rate</li>
              <li><em>70%</em> LTV</li>
              <li><em>5</em> Year Term</li>
              <li><em>20</em> Year Amortization</li>
              <li><em>$10,149</em> Monthly Payment</li>
            </ul>
          </div>

          <footer className="quote-footer">
            <button>Select</button>
          </footer>
        </td>
      </tr>
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


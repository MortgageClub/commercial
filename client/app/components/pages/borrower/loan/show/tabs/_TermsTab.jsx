import React, { Component } from 'react';
import { connect } from 'react-redux';

class TermsTab extends Component {
  render() {
    const loan = this.props.loan;

    return (
      <div>
        <div>
          <h5>Your Loan Summary</h5>
        </div>
        <div className="table-responsive term-board">
          <table className="table table-striped table-bordered">
            <tbody>
              <tr>
                <td>Property Address</td>
                <td>{loan && loan.property_address}</td>
              </tr>
              <tr>
                <td>Property Type</td>
                <td>{loan && loan.property && loan.property.property_type}</td>
              </tr>
              <tr>
                <td>Estimated Value</td>
                <td>{loan && loan.property && loan.property.estimated_value}</td>
              </tr>
              <tr>
                <td>Appraised Value</td>
                <td>{loan && loan.property && loan.property.appraised_value}</td>
              </tr>
              <tr>
                <td>Loan Amount</td>
                <td>{loan && loan.amount}</td>
              </tr>
              <tr>
                <td>LTV</td>
                <td>{loan && loan.ltv}</td>
              </tr>
              <tr>
                <td>Interest Rate Spread</td>
                <td>{loan && loan.interest_rate_spread}</td>
              </tr>
              <tr>
                <td>Interest Rate Index</td>
                <td>{loan && loan.interest_rate_index}</td>
              </tr>
              <tr>
                <td>Fixed Rate Period</td>
                <td>{loan && loan.fixed_rate_period}</td>
              </tr>
              <tr>
                <td>Term</td>
                <td>{loan && loan.term}</td>
              </tr>
              <tr>
                <td>Amortization</td>
                <td>{loan && loan.amortization}</td>
              </tr>
              <tr>
                <td>Prepayment Premium</td>
                <td>{loan && loan.prepayment_premium}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h5>Closing Costs</h5>
        </div>
        <div className="table-responsive term-board">
          <table className="table table-striped table-bordered">
            <tbody>
              <tr>
                <td>Origination Fees</td>
                <td>{loan && loan.origination_fees}</td>
              </tr>
              <tr>
                <td>Processing Fees</td>
                <td>{loan && loan.processing_fees}</td>
              </tr>
              <tr>
                <td>Underwriting Fees</td>
                <td>{loan && loan.underwritting_fees}</td>
              </tr>
              <tr>
                <td>Appraisal Fees</td>
                <td>{loan && loan.appraisal_fees}</td>
              </tr>
              <tr>
                <td>Phase 1 Fees</td>
                <td>{loan && loan.phase_1_fees}</td>
              </tr>
              <tr>
                <td>Site Visit Expense</td>
                <td>{loan && loan.site_visit_expense}</td>
              </tr>
              <tr>
                <td>Legal Expense</td>
                <td>{loan && loan.legal_expense}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    loan: state.dashboard.loan
  };
}

export default connect(mapStateToProps)(TermsTab)


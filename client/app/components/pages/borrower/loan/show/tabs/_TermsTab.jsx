import React, { Component } from 'react';
import { connect } from 'react-redux';

class TermsTab extends Component {
  render() {
    const loan = this.props.loan;

    return (
      <div>
        {
          loan && loan.is_showed_guide != true
          ?
            this.renderSampleData()
          :
            this.renderRealData(loan)
        }
      </div>
    )
  }

  renderRealData(loan) {
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
                <td>Purpose</td>
                <td>{loan && loan.purpose}</td>
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
                <td>Net Operating Income</td>
                <td>{loan && loan.net_operating_income}</td>
              </tr>
              <tr>
                <td>DCSR</td>
                <td>{loan && loan.dcsr}</td>
              </tr>
              <tr>
                <td>Interest Rate Spread</td>
                <td>{loan && loan.interest_rate_spread ? loan.amortization + " basis points" : null}</td>
              </tr>
              <tr>
                <td>Interest Rate Index</td>
                <td>{loan && loan.interest_rate_index}</td>
              </tr>
              <tr>
                <td>Fixed Rate Period</td>
                <td>{loan && loan.fixed_rate_period ? loan.fixed_rate_period + " years" : null}</td>
              </tr>
              <tr>
                <td>Term</td>
                <td>{loan && loan.term ? loan.term + " years" : null}</td>
              </tr>
              <tr>
                <td>Amortization</td>
                <td>{loan && loan.amortization ? loan.amortization + " years" : null}</td>
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
                <td>Survey Fees</td>
                <td>{loan && loan.survey_fees}</td>
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

  renderSampleData() {
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
                <td>1420 North Main Street, Orrville, OH, United States</td>
              </tr>
              <tr>
                <td>Property Type</td>
                <td>Retail</td>
              </tr>
              <tr>
                <td>Estimated Value</td>
                <td>$2,500,000</td>
              </tr>
              <tr>
                <td>Appraised Value</td>
                <td>$2,500,000</td>
              </tr>
              <tr>
                <td>Purpose</td>
                <td>Refinance</td>
              </tr>
              <tr>
                <td>Loan Amount</td>
                <td>$1,875,000</td>
              </tr>
              <tr>
                <td>LTV</td>
                <td>75%</td>
              </tr>
              <tr>
                <td>Net Operating Income</td>
                <td>$192,682</td>
              </tr>
              <tr>
                <td>DCSR</td>
                <td>1.32</td>
              </tr>
              <tr>
                <td>Interest Rate Spread</td>
                <td>25 basis points</td>
              </tr>
              <tr>
                <td>Interest Rate Index</td>
                <td>5 Year Treasury Index</td>
              </tr>
              <tr>
                <td>Fixed Rate Period</td>
                <td>5 years</td>
              </tr>
              <tr>
                <td>Term</td>
                <td>5 years</td>
              </tr>
              <tr>
                <td>Amortization</td>
                <td>25 years</td>
              </tr>
              <tr>
                <td>Prepayment Premium</td>
                <td>3% of outstanding loan balance in year 1, 2% of outstanding loan balance in year 2, 1% for the remaining loan term</td>
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
                <td>$8,400</td>
              </tr>
              <tr>
                <td>Processing Fees</td>
                <td>$850</td>
              </tr>
              <tr>
                <td>Underwriting Fees</td>
                <td>$0</td>
              </tr>
              <tr>
                <td>Appraisal Fees</td>
                <td>$1,800</td>
              </tr>
              <tr>
                <td>Survey Fees</td>
                <td></td>
              </tr>
              <tr>
                <td>Phase 1 Fees</td>
                <td>$1,800</td>
              </tr>
              <tr>
                <td>Site Visit Expense</td>
                <td>$975</td>
              </tr>
              <tr>
                <td>Legal Expense</td>
                <td>$2,950</td>
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


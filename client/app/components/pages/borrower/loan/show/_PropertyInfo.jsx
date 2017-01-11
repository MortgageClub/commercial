import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addStep } from '../../../../../actions/GuidedTourAction';
import { formatCurrency } from '../../../../../utils/FormatUtils';

class PropertyInfo extends Component {
  componentDidMount() {
    if (!this.props.steps){
      this.props.addStep({
        title: 'Loan Information',
        text: 'Loan Information',
        selector: '.loan-information',
        position: 'bottom',
        type: 'hover',
        style: {
          beacon: {
            inner: '#95c41f',
            outer: '#95c41f'
          }
        }
      });
    }
  }

  render() {
    const loan = this.props.loan;

    return (
      <div className="row">
        <div className="col-md-3">
          <img src={loan && loan.property_image ? loan.property_image : "/images/flat/1.jpg"}/>
        </div>
        <div className="col-md-9 loan-information">
          {
            loan
            ?
              <div>
                <h4>{loan.property_address}</h4>
                <div>Loan Amount: {loan.amount}</div>
                <div>Purpose: {loan.purpose}</div>
                <div>Status: {loan.status}</div>
              </div>
            :
              null
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    loan: state.dashboard.loan,
    steps: state.steps.all
  };
}

export default connect(mapStateToProps, { addStep })(PropertyInfo)


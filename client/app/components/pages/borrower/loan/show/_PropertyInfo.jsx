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
        selector: '.first-step',
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
          <img src="/images/blog/blog-details.jpg"/>
        </div>
        <div className="col-md-9 first-step">
          {
            loan
            ?
              <div>
                <h4>{loan.property && loan.property.address ? loan.property.address.full_text : "Unknown Address"}</h4>
                <div>{formatCurrency(loan.amount)} - {loan.purpose}</div>
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


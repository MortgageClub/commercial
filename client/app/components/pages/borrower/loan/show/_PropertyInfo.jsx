import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatCurrency } from '../../../../../utils/FormatUtils';

class PropertyInfo extends Component {
  render() {
    const loan = this.props.loan;

    return (
      <div className="row">
        <div className="col-md-3">
          <img src="/images/blog/blog-details.jpg"/>
        </div>
        <div className="col-md-9">
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
    loan: state.dashboard.loan
  };
}

export default connect(mapStateToProps)(PropertyInfo)


import React, { Component } from 'react';
import { connect } from 'react-redux';

class PropertyInfo extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-3">
          <img src="/images/blog/blog-details.jpg"/>
        </div>
        <div className="col-md-9">
          <h4>1722 Silver Meadow Court, San Jose, CA 95121</h4>
          <p>$0 - Primary Residence - Refinance Loan</p>
          <p>Status: Submitted - Rate: 3.000% (not locked)</p>
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


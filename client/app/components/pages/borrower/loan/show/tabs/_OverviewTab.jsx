import React, { Component } from 'react';
import { connect } from 'react-redux';

class OverviewTab extends Component {
  render() {
    return (
      <div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    loan: state.dashboard.loan
  };
}

export default connect(mapStateToProps)(OverviewTab)


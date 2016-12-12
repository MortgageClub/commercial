import React, { Component } from 'react';
import { connect } from 'react-redux';

class ClosingTab extends Component {
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <th width="30%">Name</th>
            <th width="15%">Owner</th>
            <th width="40%">Description</th>
            <th width="15%">Modified</th>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    loan: state.dashboard.loan
  };
}

export default connect(mapStateToProps)(ClosingTab)


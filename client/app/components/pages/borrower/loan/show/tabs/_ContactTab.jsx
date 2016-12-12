import React, { Component } from 'react';
import { connect } from 'react-redux';

class ContactTab extends Component {
  render() {
    return (
      <div>
        <table className="table">
          <tbody>
            <tr className="active">
              <td width="12%"><img src="/images/avatar/1.jpg"/></td>
              <td>
                <div><h6>Billy Tran (Mortgage Advisor)</h6></div>
                <div>billy@mortgageclub.co</div>
              </td>
            </tr>
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

export default connect(mapStateToProps)(ContactTab)


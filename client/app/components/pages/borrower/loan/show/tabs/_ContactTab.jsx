import React, { Component } from 'react';
import { connect } from 'react-redux';

class ContactTab extends Component {
  render() {
    const loan = this.props.loan;

    return (
      <div className="table-responsive">
        <table className="table table-hover">
          <tbody>
            {
              loan && loan.loan_members && loan.loan_members.map(loan_member => this.renderLoanMember(loan_member))
            }
          </tbody>
        </table>
      </div>
    )
  }

  renderLoanMember(loanMember) {
    return (
      <tr key={loanMember.id}>
        <td width="12%"><img src={loanMember.avatar_url}/></td>
        <td>
          <div><h6>{loanMember.full_name} ({loanMember.title})</h6></div>
          <div>{loanMember.email}</div>
        </td>
      </tr>
    )
  }
}

function mapStateToProps(state) {
  return {
    loan: state.dashboard.loan
  };
}

export default connect(mapStateToProps)(ContactTab)


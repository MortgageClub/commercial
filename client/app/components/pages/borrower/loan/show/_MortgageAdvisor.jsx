import React, { Component } from 'react';
import { connect } from 'react-redux';

class MortgageAdvisor extends Component {
  render() {
    const loan = this.props.loan;
    const loanMembers = loan ? loan.loan_members : [];
    const mortgageAdvisor = loanMembers.find(loanMember => loanMember.title = "Relationship Manager");

    return (
      <div>
        <h4>Your Relationship Manager</h4>
        {
          mortgageAdvisor
          ?
            <div className="media">
              <a className="media-left">
                <img src={mortgageAdvisor.avatar_url} width="81"/>
              </a>
              <div className="media-body">
                <h5 className="media-heading">
                  {mortgageAdvisor.full_name}
                </h5>
                <p>
                  <span className="fa fa-user"></span>
                  <span>Individual BRE: {mortgageAdvisor.individual_bre}</span>
                </p>
                <p>
                  <span className="fa fa-phone"></span>
                  <span>{mortgageAdvisor.phone_number}</span>
                </p>
                <p>
                  <span className="fa fa-envelope"></span>
                  <span>{mortgageAdvisor.email}</span>
                </p>
              </div>
            </div>
          :
            null
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    loan: state.dashboard.loan
  };
}

export default connect(mapStateToProps)(MortgageAdvisor)


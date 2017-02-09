import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addStep } from '../../../../../actions/GuidedTourAction';

class MortgageAdvisor extends Component {
  componentDidMount() {
    if (!this.props.steps){
      this.props.addStep({
        title: 'Loan advisor',
        text: 'Call, email, or text your loan advisor at any time for updates and guidance.',
        selector: '.relationship-manager',
        position: 'left',
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
    const loanMembers = loan ? loan.loan_members : [];
    const mortgageAdvisor = loanMembers.find(loanMember => loanMember.title = "Loan Advisor");

    return (
      <div className="relationship-manager">
        <h4>Your Loan Advisor</h4>
        {
          mortgageAdvisor
          ?
            <div className="media">
              <div className="media-body">
                <h5 className="media-heading">
                  {mortgageAdvisor.full_name}
                </h5>
                <div>
                  <span className="fa fa-user"></span>
                  <span className="fw-300">License Number: {mortgageAdvisor.individual_bre}</span>
                </div>
                <div>
                  <span className="fa fa-phone"></span>
                  <span className="fw-300">{mortgageAdvisor.phone_number}</span>
                </div>
                <div>
                  <span className="fa fa-envelope"></span>
                  <span className="fw-300"><a href={"mailto:" + mortgageAdvisor.email}>{mortgageAdvisor.email}</a></span>
                </div>
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
    loan: state.dashboard.loan,
    steps: state.steps.all
  };
}

export default connect(mapStateToProps, { addStep })(MortgageAdvisor)


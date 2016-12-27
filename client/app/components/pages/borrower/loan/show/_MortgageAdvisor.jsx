import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addStep } from '../../../../../actions/GuidedTourAction';

class MortgageAdvisor extends Component {
  componentDidMount() {
    if (!this.props.steps){
      this.props.addStep({
        title: 'Relationship Manager',
        text: 'Relationship Manager',
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
    const mortgageAdvisor = loanMembers.find(loanMember => loanMember.title = "Relationship Manager");

    return (
      <div className="relationship-manager">
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
    loan: state.dashboard.loan,
    steps: state.steps.all
  };
}

export default connect(mapStateToProps, { addStep })(MortgageAdvisor)


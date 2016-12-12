import React, { Component } from 'react';
import { connect } from 'react-redux';

class MortgageAdvisor extends Component {
  render() {
    return (
      <div>
        <h4>Your Mortgage Advisor</h4>
        <div className="media">
          <a className="media-left" href="#">
            <img src="/images/avatar/1.jpg" alt="" />
          </a>
          <div className="media-body">
            <h5 className="media-heading">
              Billy Tran
            </h5>
            <p>
              <span className="fa fa-user"></span>
              <span>NMLS ID: 1457126</span>
            </p>
            <p>
              <span className="fa fa-phone"></span>
              <span>(415) 849-6326</span>
            </p>
            <p>
              <span className="fa fa-envelope"></span>
              <span>billy@mortgageclub.co</span>
            </p>
          </div>
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

export default connect(mapStateToProps)(MortgageAdvisor)


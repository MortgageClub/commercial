import React, { Component } from 'react';
import { fetch } from '../../../../../actions/LoanAction';
import { connect } from 'react-redux';

class Index extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        Loan Details
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    routing: state.routing
  }
}

export default connect(mapStateToProps, { fetch })(Index)


import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import BorrowerHeader from './BorrowerHeader';
import PublicHeader from './PublicHeader';

class Index extends Component {
  render() {
    return (
      <div>
        {
          this.props.authenticated && this.props.routing && this.props.routing.locationBeforeTransitions && this.props.routing.locationBeforeTransitions.pathname == "/dashboard"
          ?
            <BorrowerHeader />
          :
            <PublicHeader />
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    routing: state.routing
  };
}

export default connect(mapStateToProps)(Index);

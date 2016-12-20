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
          this.props.authenticated && this.props.location && this.matchBorrowerHeader(this.props.location.pathname)
          ?
            <BorrowerHeader />
          :
            <PublicHeader />
        }
      </div>
    )
  }

  matchBorrowerHeader(path) {
    if (path == "/dashboard" || path.indexOf("/loans/") > -1 || path.indexOf("/referral") > -1)
      return true;
    return false;
  }
}

function mapStateToProps(state, ownProps) {
  return {
    authenticated: state.auth.authenticated,
    location: ownProps.location
  };
}

export default connect(mapStateToProps)(Index);

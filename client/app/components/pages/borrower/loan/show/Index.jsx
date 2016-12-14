import React, { Component } from 'react';
import { fetch } from '../../../../../actions/LoanAction';
import { connect } from 'react-redux';
import PropertyInfo from './_PropertyInfo';
import MortgageAdvisor from './_MortgageAdvisor';
import TabsContent from './_TabsContent';

class Index extends Component {
  componentDidMount() {
    if(this.props.params.id){
      this.props.fetch(this.props.params.id);
    }
  }

  render() {
    return (
      <div className="container pt-90 pb-30 loan-dashboard" style={{"minHeight": "400px"}}>
        <PropertyInfo />
        <div className="row pt-50">
          <div className="col-md-9">
            <TabsContent />
          </div>
          <div className="col-md-3">
            <MortgageAdvisor />
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    authenticated: state.auth.authenticated,
    loan: state.dashboard.loan,
    params: ownProps.params
  }
}

export default connect(mapStateToProps, { fetch })(Index)


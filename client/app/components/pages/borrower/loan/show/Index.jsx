import React, { Component } from 'react';
import { fetch } from '../../../../../actions/LoanAction';
import { connect } from 'react-redux';
import PropertyInfo from './_PropertyInfo';
import MortgageAdvisor from './_MortgageAdvisor';
import LoanFaqs from './_LoanFaqs';
import TabsContent from './_TabsContent';
import Joyride from 'react-joyride';

class Index extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    if(this.props.params.id){
      this.props.fetch(this.props.params.id);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.joyride){
      this.joyride.start();
    }
  }

  render() {
    return (
      <div className="container pt-90 pb-30 loan-dashboard" style={{"minHeight": "400px"}}>
        {
          this.props.loan && this.props.loan.status == "New Loan"
          ?
            <Joyride
              ref={c => (this.joyride = c)}
                debug={false}
                steps={this.props.steps}
                type={"continuous"}
                showSkipButton={true}
                showStepsProgress={true}
                scrollToSteps={false} />
          :
            null
        }
        <PropertyInfo loan={this.props.loan}/>
        <div className="row pt-50">
          <div className="col-md-9">
            <TabsContent />
          </div>
          <div className="col-md-3">
            <MortgageAdvisor />
            <LoanFaqs />
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
    params: ownProps.params,
    steps: state.steps.all
  }
}

export default connect(mapStateToProps, { fetch })(Index)


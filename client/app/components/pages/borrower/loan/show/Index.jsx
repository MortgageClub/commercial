import React, { Component } from 'react';
import { fetch } from '../../../../../actions/LoanAction';
import { connect } from 'react-redux';
import PropertyInfo from './_PropertyInfo';
import MortgageAdvisor from './_MortgageAdvisor';
import LoanFaqs from './_LoanFaqs';
import TabsContent from './_TabsContent';
import Joyride from 'react-joyride';

class Index extends Component {
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

  callback(data) {
    if(data.index == 1){
      $(".overviewTab a").click();
    }
    else if(data.index == 2){
      $(".quotesTab a").click();
    }
    else if(data.index == 3){
      $(".propertyTab a").click();
    }
    else if(data.index == 4){
      $(".borrowerTab a").click();
    }
    else if(data.index == 5){
      $(".guarantorTab a").click();
    }
    else if(data.index == 6){
      $(".loanTab a").click();
    }
    else if(data.index == 7){
      $(".closingTab a").click();
    }
    else if(data.index == 8){
      $(".contactsTab a").click();
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
                showStepsProgress={true}
                scrollToSteps={false}
                callback={this.callback} />
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
    loan: state.dashboard.loan,
    params: ownProps.params,
    steps: state.steps.all
  }
}

export default connect(mapStateToProps, { fetch })(Index)


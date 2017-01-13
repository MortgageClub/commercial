import React, { Component } from 'react';
import { fetch, updateShowedGuide } from '../../../../../actions/LoanAction';
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
      this.joyride.start(true);
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
      $(".termsTab a").click();
    }
    else if(data.index == 4){
      $(".propertyTab a").click();
    }
    
    if(data.type == "finished" && this.props.params.id){
      this.props.updateShowedGuide(this.props.params.id);
      $(".overviewTab a").click();
    }
  }

  render() {
    return (
      <div className="container pt-90 pb-30 loan-dashboard" style={{"minHeight": "400px"}}>
        <h4 className="dashboard-title">BORROWER DASHBOARD</h4>
        {
          this.props.loan && this.props.loan.is_showed_guide !== true
          ?
            <Joyride
              ref={c => (this.joyride = c)}
              debug={false}
              steps={this.props.steps}
              type={"continuous"}
              showStepsProgress={true}
              showSkipButton={true}
              scrollToSteps={false}
              locale={{back: 'Back', close: 'Close', last: 'Finish Tour', next: 'Next', skip: 'Skip Tour'}}
              callback={this.callback.bind(this)} />
          :
            null
        }
        <PropertyInfo loan={this.props.loan}/>
        {
          this.props.loan
          ?
            <div className="pt-20">
              <ol className="cd-breadcrumb triangle">
                <li className={this.props.loan.status == "Due Diligence" ? "current" : null}>
                  <span>Due Diligence</span>
                </li>
                <li className={this.props.loan.status == "Getting Quotes" ? "current" : null}>
                  <span>Getting Quotes</span>
                </li>
                <li className={this.props.loan.status == "Processing" ? "current" : null}>
                  <span>Processing</span>
                </li>
                <li className={this.props.loan.status == "Underwriting" ? "current" : null}>
                  <span>Underwriting</span>
                </li>
                <li className={this.props.loan.status == "Closing" ? "current" : null}>
                  <span>Closing</span>
                </li>
                <li className={this.props.loan.status == "Funding" ? "current" : null}>
                  <span>Funding</span>
                </li>
                <li className={this.props.loan.status == "Closed" ? "current" : null}>
                  <span>Closed</span>
                </li>
              </ol>
            </div>
          : null
        }
        <div className="row pt-10">
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

export default connect(mapStateToProps, { fetch, updateShowedGuide })(Index)


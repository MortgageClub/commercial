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
      $(".termsTab a").click();
    }
    else if(data.index == 4){
      $(".propertyTab a").click();
    }
    else if(data.index == 5){
      $(".borrowerTab a").click();
    }
    else if(data.index == 6){
      $(".guarantorTab a").click();
    }
    else if(data.index == 7){
      $(".loanTab a").click();
    }
    else if(data.index == 8){
      $(".closingTab a").click();
    }
    else if(data.index == 9){
      $(".contactsTab a").click();
    }
    console.log(data);
    if(data.type == "finished" && this.props.params.id){
      this.props.updateShowedGuide(this.props.params.id);
    }
  }

  render() {
    return (
      <div className="container pt-90 pb-30 loan-dashboard" style={{"minHeight": "400px"}}>
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
                callback={this.callback.bind(this)} />
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

export default connect(mapStateToProps, { fetch, updateShowedGuide })(Index)


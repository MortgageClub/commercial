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
    this.state = {
      steps: []
    }
  }

  componentDidMount() {
    if(this.props.params.id){
      this.props.fetch(this.props.params.id);
    }

    this.addSteps({
      title: 'First Step',
      text: 'Start using the <strong>joyride</strong>', // supports html tags
      selector: '.first-step',
      position: 'bottom-left',
      type: 'hover',
      style: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        borderRadius: '0',
        color: '#fff',
        mainColor: '#ff4456',
        textAlign: 'center',
        width: '29rem',
        beacon: {
            inner: '#000',
            outer: '#000'
        },
        button: {
            display: 'none'
        },
        skip: {
            color: '#f04'
        },
      },
      name: 'my-first-step'
    });
    this.joyride.start();
  }

  addSteps(steps) {
    let joyride = this.joyride;

    if (!Array.isArray(steps)) {
        steps = [steps];
    }

    if (!steps.length) {
        return false;
    }

    this.setState(function(currentState) {
      currentState.steps = currentState.steps.concat(joyride.parseSteps(steps));
      return currentState;
    });
  }

  render() {
    return (
      <div className="container pt-90 pb-30 loan-dashboard" style={{"minHeight": "400px"}}>
        <Joyride ref={c => (this.joyride = c)} steps={this.state.steps} debug={false} />
        <PropertyInfo />
        <div className="row pt-50">
          <div className="col-md-9 first-step">
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
    steps: []
  }
}

export default connect(mapStateToProps, { fetch })(Index)


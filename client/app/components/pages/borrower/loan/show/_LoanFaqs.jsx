import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAll } from '../../../../../actions/LoanFaqAction';
import { addStep } from '../../../../../actions/GuidedTourAction';

class LoanFaqs extends Component {
  componentDidMount() {
    this.props.getAll();

    this.props.addStep({
      title: 'Helpful Q&A',
      text: 'Helpful Q&A',
      selector: '.tenth-step',
      position: 'left',
      type: 'hover',
      style: {
        beacon: {
          inner: '#95c41f',
          outer: '#95c41f'
        }
      }
    });
  }

  render() {
    return (
      <div className="helpful-faq tenth-step">
        <h4>Helpful Q&A</h4>
        <div className="panel-group" role="tablist" aria-multiselectable="true">
          {
            this.props.loan_faqs && this.props.loan_faqs.map(loan_faq => this.renderLoanFaq(loan_faq))
          }
        </div>
      </div>
    )
  }

  renderLoanFaq(loanFaq) {
    return (
      <div className="panel" key={loanFaq.id}>
        <div className="panel-heading" role="tab" id={"heading" + loanFaq.id}>
          <h4 className="panel-title">
            <a role="button" data-toggle="collapse" data-parent="#accordion" href={"#collapse" + loanFaq.id} aria-expanded="false" aria-controls={"collapse" + loanFaq.id} className="collapsed">
              {loanFaq.question}
            </a>
          </h4>
        </div>
        <div id={"collapse" + loanFaq.id} className="panel-collapse collapse" role="tabpanel" aria-labelledby={"heading" + loanFaq.id} aria-expanded="false">
          <div className="panel-body" dangerouslySetInnerHTML={{__html: loanFaq.answer}}>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    loan_faqs: state.dashboard.loan_faqs
  };
}

export default connect(mapStateToProps, { getAll, addStep })(LoanFaqs)


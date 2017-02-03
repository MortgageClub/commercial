import React, { Component } from 'react';
import { connect } from 'react-redux';
import BorrowerTab from './tabs/_BorrowerTab';
import ClosingTab from './tabs/_ClosingTab';
import ContactTab from './tabs/_ContactTab';
import LoanTab from './tabs/_LoanTab';
import OverviewTab from './tabs/_OverviewTab';
import PropertyTab from './tabs/_PropertyTab';
import GuarantorTab from './tabs/_GuarantorTab';
import QuotesTab from './tabs/_QuotesTab';
import TermsTab from './tabs/_TermsTab';
import { addStep } from '../../../../../actions/GuidedTourAction';

class TabsContent extends Component {
  componentDidMount() {
    if (!this.props.steps){
      this.props.addStep([
        {
          title: 'Overview',
          text: 'See items that need your action to move the process forward.',
          selector: '.overviewTab',
          position: 'top',
          type: 'hover',
          style: {
            beacon: {
              inner: '#95c41f',
              outer: '#95c41f'
            }
          }
        },
        {
          title: 'Quotes',
          text: 'View the best 3 soft quotes from our lending sources for your unique scenario. Want to see more options? Get in touch with us.',
          selector: '.quotesTab',
          position: 'top',
          type: 'hover',
          style: {
            beacon: {
              inner: '#95c41f',
              outer: '#95c41f'
            }
          }
        },
        {
          title: 'Terms',
          text: 'Find a comprehensive overview of your final loan terms and fees.',
          selector: '.termsTab',
          position: 'top',
          type: 'hover',
          style: {
            beacon: {
              inner: '#95c41f',
              outer: '#95c41f'
            }
          }
        },
        {
          title: 'Loan documents',
          text: 'Your documents are organized by what they relate to: Property, Borrower, Guarantor, Loan, and Closing.',
          selector: '.propertyTab',
          position: 'top',
          type: 'hover',
          style: {
            beacon: {
              inner: '#95c41f',
              outer: '#95c41f'
            }
          }
        }
      ]);
    }
  }

  render() {
    return (
      <div>
        <ul className="nav nav-tabs" role="tablist">
          <li role="presentation" className="active overviewTab">
            <a href="#overview" aria-controls="overview" role="tab" data-toggle="tab">Overview</a>
          </li>
          <li role="presentation" className="quotesTab">
            <a href="#quotes" aria-controls="quotes" role="tab" data-toggle="tab">Quotes</a>
          </li>
          <li role="presentation" className="termsTab">
            <a href="#terms" aria-controls="terms" role="tab" data-toggle="tab">Terms</a>
          </li>
          <li role="presentation" className="propertyTab">
            <a href="#property" aria-controls="property" role="tab" data-toggle="tab">Property</a>
          </li>
          <li role="presentation" className="borrowerTab">
            <a href="#borrower" aria-controls="borrower" role="tab" data-toggle="tab">Borrower</a>
          </li>
          <li role="presentation" className="guarantorTab">
            <a href="#guarantor" aria-controls="guarantor" role="tab" data-toggle="tab">Guarantor</a>
          </li>
          <li role="presentation" className="loanTab">
            <a href="#loan" aria-controls="loan" role="tab" data-toggle="tab">Loan</a>
          </li>
          <li role="presentation" className="closingTab">
            <a href="#closing" aria-controls="closing" role="tab" data-toggle="tab">Closing</a>
          </li>
          <li role="presentation" className="contactsTab">
            <a href="#contacts" aria-controls="contacts" role="tab" data-toggle="tab">Contacts</a>
          </li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane fade active in" id="overview">
            <OverviewTab />
          </div>
          <div className="tab-pane fade" id="quotes">
            <QuotesTab />
          </div>
          <div className="tab-pane fade" id="terms">
            <TermsTab />
          </div>
          <div className="tab-pane fade" id="property">
            <PropertyTab />
          </div>
          <div className="tab-pane fade" id="borrower">
            <BorrowerTab />
          </div>
          <div className="tab-pane fade" id="guarantor">
            <GuarantorTab />
          </div>
          <div className="tab-pane fade" id="loan">
            <LoanTab />
          </div>
          <div className="tab-pane fade" id="closing">
            <ClosingTab />
          </div>
          <div className="tab-pane fade" id="contacts">
            <ContactTab />
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    steps: state.steps.all
  }
}

export default connect(mapStateToProps, { addStep })(TabsContent)


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
import { addStep } from '../../../../../actions/GuidedTourAction';

class TabsContent extends Component {
  componentDidMount() {
    if (!this.props.steps){
      this.props.addStep([
        {
          title: 'Overview',
          text: 'Overview',
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
          text: 'Quotes',
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
          title: 'Property',
          text: 'Property',
          selector: '.propertyTab',
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
          title: 'Borrower',
          text: 'Borrower',
          selector: '.borrowerTab',
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
          title: 'Guarantor',
          text: 'Guarantor',
          selector: '.guarantorTab',
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
          title: 'Loan',
          text: 'Loan',
          selector: '.loanTab',
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
          title: 'Closing',
          text: 'Closing',
          selector: '.closingTab',
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
          title: 'Contacts',
          text: 'Contacts',
          selector: '.contactsTab',
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
        <h4>BORROWER DASHBOARD</h4>
        <ul className="nav nav-tabs" role="tablist">
          <li role="presentation" className="active overviewTab">
            <a href="#overview" aria-controls="overview" role="tab" data-toggle="tab">Overview</a>
          </li>
          <li role="presentation" className="quotesTab">
            <a href="#quotes" aria-controls="overview" role="tab" data-toggle="tab">Quotes</a>
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


import React, { Component } from 'react';
import { connect } from 'react-redux';
import BorrowerTab from './tabs/_BorrowerTab';
import ClosingTab from './tabs/_ClosingTab';
import ContactTab from './tabs/_ContactTab';
import LoanTab from './tabs/_LoanTab';
import OverviewTab from './tabs/_OverviewTab';
import PropertyTab from './tabs/_PropertyTab';

class TabsContent extends Component {
  render() {
    return (
      <div>
        <h4>Loan Information</h4>
        <ul className="nav nav-tabs" role="tablist">
          <li role="presentation" className="active">
            <a href="#overview" aria-controls="overview" role="tab" data-toggle="tab">Overview</a>
          </li>
          <li role="presentation">
            <a href="#property" aria-controls="property" role="tab" data-toggle="tab">Property</a>
          </li>
          <li role="presentation">
            <a href="#borrower" aria-controls="borrower" role="tab" data-toggle="tab">Borrower</a>
          </li>
          <li role="presentation">
            <a href="#loan" aria-controls="loan" role="tab" data-toggle="tab">Loan</a>
          </li>
          <li role="presentation">
            <a href="#closing" aria-controls="closing" role="tab" data-toggle="tab">Closing</a>
          </li>
          <li role="presentation">
            <a href="#contacts" aria-controls="contacts" role="tab" data-toggle="tab">Contacts</a>
          </li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane fade active in" id="overview">
            <OverviewTab />
          </div>
          <div className="tab-pane fade" id="property">
            <PropertyTab />
          </div>
          <div className="tab-pane fade" id="borrower">
            <BorrowerTab />
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
    loan: state.dashboard.loan
  };
}

export default connect(mapStateToProps)(TabsContent)


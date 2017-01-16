import React, { Component } from 'react';
import { connect } from 'react-redux';

class LoanTab extends Component {
  render() {
    const loan = this.props.loan;

    return (
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th width="40%">Name</th>
              <th width="35%">Description</th>
              <th width="15%">Modified</th>
              <th width="10%">Download</th>
            </tr>
          </thead>
          <tbody>
            {
              loan
              ?
                loan.is_showed_guide != true
                ?
                  <tr>
                    <td>Commercial term note.pdf</td>
                    <td>Commercial Term Note - Loan Note</td>
                    <td>01/09/2017</td>
                    <td><a href="" target="_blank"><span className="fa fa-download"></span></a></td>
                  </tr>
                :
                  loan.documents.map(document => this.renderDocument(document))
              :
                null
            }
          </tbody>
        </table>
      </div>
    )
  }

  renderDocument(document){
    return (
      <tr key={document.id}>
        <td>{document.original_filename}</td>
        <td>{document.description}</td>
        <td>{document.updated_at}</td>
        <td><a href={document.attachment_url} target="_blank"><span className="fa fa-download"></span></a></td>
      </tr>
    )
  }
}

function mapStateToProps(state) {
  return {
    loan: state.dashboard.loan
  };
}

export default connect(mapStateToProps)(LoanTab)


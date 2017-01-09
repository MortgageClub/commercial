import React, { Component } from 'react';
import { connect } from 'react-redux';

class GuarantorTab extends Component {
  render() {
    const loan = this.props.loan;

    return (
      <div>
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
              loan && loan.guarantor
              ?
                loan.guarantor.documents.map(document => this.renderDocument(document))
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

export default connect(mapStateToProps)(GuarantorTab)


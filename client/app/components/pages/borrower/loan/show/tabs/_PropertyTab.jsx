import React, { Component } from 'react';
import { connect } from 'react-redux';

class PropertyTab extends Component {
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
          {
            loan && loan.property
            ?
              loan.is_showed_guide != true
              ?
                <tbody>
                  <tr>
                    <td>Appraisal report.pdf</td>
                    <td>Appraisal - Appraisal report</td>
                    <td>01/09/2017</td>
                    <td><a href="" target="_blank"><span className="fa fa-download"></span></a></td>
                  </tr>
                  <tr>
                    <td>Rent roll.pdf</td>
                    <td>Rent Roll</td>
                    <td>01/09/2017</td>
                    <td><a href="" target="_blank"><span className="fa fa-download"></span></a></td>
                  </tr>
                  <tr>
                    <td>Lease agreement.pdf</td>
                    <td>Lease Agreement</td>
                    <td>01/09/2017</td>
                    <td><a href="" target="_blank"><span className="fa fa-download"></span></a></td>
                  </tr>
                </tbody>
              :
                <tbody>
                  { loan.property.documents.map(document => this.renderDocument(document)) }
                </tbody>
            :
              null
          }
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

export default connect(mapStateToProps)(PropertyTab)


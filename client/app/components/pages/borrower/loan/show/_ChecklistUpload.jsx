import React, { Component } from 'react';
import { connect } from 'react-redux';

class ChecklistUpload extends Component {
  render() {
    const checklist = this.props.checklist;
    const labelId = checklist.id + "Label";

    return (
      <div className="modal fade" id={this.props.buttonId} tabIndex="-1" role="dialog" aria-labelledby={labelId}>
        <div className="modal-dialog modal-upload" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title" id={labelId}>{this.props.title}</h4>
            </div>
            <div className="modal-body">
              <h6>{checklist.document_type.category} - {checklist.document_type.name} - {checklist.document_description}</h6>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(ChecklistUpload)


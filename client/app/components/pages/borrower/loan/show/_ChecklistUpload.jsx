import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import { upload } from '../../../../../actions/DocumentAction';

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
              <h6>{checklist.document_description}</h6>
              <div className='dropzone'>
                <Dropzone onDrop={this.onDrop.bind(this)} multiple={false}>
                  <i className="fa fa-cloud-upload fa-3x"></i>
                  <div>You can drag and drop file here to upload. Or, click to choose file</div>
                </Dropzone>
              </div>
              {
                checklist.document
                ?
                  <div>
                    <a href={checklist.document.attachment_url} target="_blank">{checklist.document.original_filename}</a>
                  </div>
                :
                  null
              }
              <div className="text-center pt-10">
                <button className="button-1 btn-block half-width" onClick={this.closePopup.bind(this)} disabled={checklist.document ? null : "disabled"}>{"I've completed this task"}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  closePopup() {
    $("#" + this.props.buttonId).modal("hide");
  }

  onDrop(files) {
    if(files.length > 0) {
      this.props.upload({ checklist_id: this.props.checklist.id, file: files[0] });
    }
  }
}

export default connect(null, { upload })(ChecklistUpload)


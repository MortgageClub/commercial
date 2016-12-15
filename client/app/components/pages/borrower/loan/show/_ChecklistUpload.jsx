import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import { upload } from '../../../../../actions/DocumentAction';

class ChecklistUpload extends Component {
  componentDidUpdate() {
    $("#" + this.props.buttonId).modal("hide");
  }

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
              {
                checklist.document
                ?
                  <div>
                    <a href={checklist.document.attachment_url} target="_blank">{checklist.document.original_filename}</a>
                  </div>
                :
                  null
              }
              <div className='dropzone'>
                <Dropzone onDrop={this.onDrop.bind(this)} multiple={false}>
                  <div>Try dropping some files here, or click to select files to upload.</div>
                </Dropzone>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  onDrop(files) {
    if(files.length > 0) {
      this.props.upload({ checklist_id: this.props.checklist.id, file: files[0] });
    }
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, { upload })(ChecklistUpload)


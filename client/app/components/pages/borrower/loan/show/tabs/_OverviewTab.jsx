import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mark_done } from '../../../../../../actions/ChecklistAction';
import ChecklistUpload from '../_ChecklistUpload';

class OverviewTab extends Component {
  componentDidUpdate() {
    $('[data-toggle="popover"]').popover();
  }

  render() {
    return (
      <div className="table-responsive">
        {
          this.props.loan && this.props.loan.headline_1
          ?
            <div className="row overview-status">
              <div className="col-md-10">
                <h4>{this.props.loan.headline_1}</h4>
                <h5>{this.props.loan.headline_2}</h5>
              </div>
              <div className="col-md-2"></div>
            </div>
          :
            null
        }
        {
          this.props.loan && this.props.loan.checklists
          ?
            <table className="table table-hover">
              <thead>
                <tr>
                  <th width="10%">Status</th>
                  <th width="40%">Task</th>
                  <th width="10%">Info</th>
                  <th width="20%">Due</th>
                  <th width="20%">Action</th>
                </tr>
              </thead>
              <tbody>
                { this.props.loan.checklists.map(checklist => this.renderChecklist(checklist)) }
              </tbody>
            </table>
          :
            null
        }
      </div>
    )
  }

  renderChecklist(checklist) {
    const button_id = checklist.checklist_type == "upload" ? ("upload-" + checklist.id) : ("check-email-" + checklist.id);

    return(
      <tr key={checklist.id}>
        <td>
          {
            checklist.status == "pending"
            ?
              <span className="fa fa-close"></span>
            :
              <span className="fa fa-check"></span>
          }
        </td>
        <td>{checklist.name}</td>
        <td>
          <button
            className="btnInfo"
            data-toggle="popover"
            data-trigger="focus"
            title="Information"
            data-content={checklist.information}>
            <span className="fa fa-info-circle"></span>
          </button>
        </td>
        <td>{checklist.due_date}</td>
        <td>
          {
            checklist.checklist_type == "upload"
            ?
              <div>
                <button className="button-1 full-width" data-toggle="modal" data-target={"#" + button_id}>
                  {checklist.status == "done" ? "Review" : "Upload"}
                </button>
                <ChecklistUpload
                  buttonId={button_id}
                  title="Upload"
                  checklist={checklist}/>
              </div>
            :
              <button className="button-1 full-width" disabled={checklist.status == "done" ? "disabled" : null} onClick={this.checkEmail.bind(this, checklist)}>Check Email</button>
          }
        </td>
      </tr>
    )
  }

  checkEmail(checklist) {
    window.open("https://mail.google.com");
    this.props.mark_done(checklist.id);
  }
}

function mapStateToProps(state) {
  return {
    loan: state.dashboard.loan,
    userInfo: state.auth.userInfo
  };
}

export default connect(mapStateToProps, { mark_done })(OverviewTab)


import React, { Component } from 'react';
import { connect } from 'react-redux';

class OverviewTab extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-10">
            <h4>Everything looks good!</h4>
            <h5>We will let you know when we need your help to move forward.</h5>
          </div>
          <div className="col-md-2"></div>
        </div>
        {
          this.props.loan && this.props.loan.checklists
          ?
            <table className="table">
              <thead>
                <tr>
                  <th width="10%">Status</th>
                  <th width="40%">Task</th>
                  <th width="15%">Info</th>
                  <th width="15%">Due</th>
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
    return(
      <tr key={checklist.id}>
        <td>{checklist.status}</td>
        <td>{checklist.name}</td>
        <td>{checklist.information}</td>
        <td>{checklist.due_date}</td>
        <td>{checklist.checklist_type}</td>
      </tr>
    )
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    loan: state.dashboard.loan
  };
}

export default connect(mapStateToProps)(OverviewTab)


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAll } from '../../../actions/LoanAction';
import { Link, browserHistory } from 'react-router';
import { isAuthenticated, authFromLocal, updateAuth } from '../../../utils/AuthUtils';

class Dashboard extends Component {
  componentDidMount() {
    if(isAuthenticated()){
      this.props.getAll();
    }else{
      browserHistory.push('');
    }
  }

  componentWillReceiveProps(newProps) {
    if(!this.props.loans || newProps.loans.length != this.props.loans.length){
      let currentAuth = authFromLocal();
      currentAuth.user.size_of_loans = newProps.loans.length;
      updateAuth(currentAuth);
    }
  }

  render() {
    return (
      <div className="pt-90 container loans-dashboard" style={{"minHeight": "400px"}}>
        <div className="featured-flat">
          <div className="row">
            {
              this.props.loans && this.props.loans.map(loan => this.renderLoan(loan))
            }
          </div>
        </div>
      </div>
    )
  }

  renderLoan(loan) {
    return (
      <div key={loan.id} className="col-md-4 col-sm-6 col-xs-12">
        <div className="flat-item">
          <div className="flat-item-image">
            <span className="for-sale">{loan.status}</span>
            <Link to={`/loans/${loan.id}`}><img width="368" height="235" src={loan && loan.property_image ? loan.property_image : "/images/flat/1.jpg"} /></Link>
            <div className="flat-link">
              <Link to={`/loans/${loan.id}`}>More Details</Link>
            </div>
          </div>
          <div className="flat-item-info">
            <div className="flat-title-price">
              <h5>
                <a>
                  {loan.property_address}
                </a>
              </h5>
            </div>
            <div className="flat-title-price">
              <span className="price">{loan.amount}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    loans: state.dashboard.loans
  }
}

export default connect(mapStateToProps, { getAll })(Dashboard)


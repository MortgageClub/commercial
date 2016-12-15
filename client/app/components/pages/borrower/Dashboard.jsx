import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAll } from '../../../actions/LoanAction';
import { formatCurrency } from '../../../utils/FormatUtils';
import { Link, browserHistory } from 'react-router';

class Dashboard extends Component {
  componentDidMount() {
    if(window.localStorage.getItem('auth') !== null){
      this.props.getAll();
    }else{
      browserHistory.push('');
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
            <Link to={`/loans/${loan.id}`}><img src="/images/flat/1.jpg" alt="" /></Link>
            <div className="flat-link">
              <Link to={`/loans/${loan.id}`}>More Details</Link>
            </div>
          </div>
          <div className="flat-item-info">
            <div className="flat-title-price">
              <h5>
                <a>
                {
                  loan.property.address
                  ?
                    loan.property.address.full_text
                  :
                    "Unknown Address"
                }
                </a>
              </h5>
            </div>
            <div className="flat-title-price">
              <span className="price">{formatCurrency(loan.amount)}</span>
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


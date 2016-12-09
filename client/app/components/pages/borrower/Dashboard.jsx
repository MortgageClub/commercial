import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAll } from '../../../actions/LoanAction';
class Dashboard extends Component {
  componentDidMount() {
    this.props.getAll();
  }

  render() {
    return (
      <div className="pt-80 container" style={{"minHeight": "400px"}}>
        <div className="featured-flat">
          <div className="row">
            {
              this.props.loans && this.props.loans.map(loan => {
                return this.loan(loan);
              })
            }
          </div>
        </div>
      </div>
    )
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.props);
  }

  loan(loan) {
    return (
      <div key={loan.id} className="col-md-4 col-sm-6 col-xs-12">
        <div className="flat-item">
          <div className="flat-item-image">
            <a href="properties-details.html"><img src="images/flat/1.jpg" alt="" /></a>
            <div className="flat-link">
              <a href="properties-details.html">More Details</a>
            </div>
            <ul className="flat-desc">
              <li>
                <img src="images/icons/4.png" alt="" />
                <span>450 sqft</span>
              </li>
              <li>
                <img src="images/icons/5.png" alt="" />
                <span>5</span>
              </li>
              <li>
                <img src="images/icons/6.png" alt="" />
                <span>3</span>
              </li>
            </ul>
          </div>
          <div className="flat-item-info">
            <div className="flat-title-price">
              <h5><a href="properties-details.html">Masons de Villa </a></h5>
              <span className="price">$52,350</span>
            </div>
            <p><img src="images/icons/location.png" alt="" />568 E 1st Ave, Ney Jersey</p>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    loans: state.loans.all
  }
}

export default connect(mapStateToProps, { getAll })(Dashboard)


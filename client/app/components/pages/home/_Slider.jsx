import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { create } from '../../../actions/LoanAction';
import { isAuthenticated } from '../../../utils/AuthUtils';
import { formatCurrency } from '../../../utils/FormatUtils';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { PURPOSES } from '../../../utils/ValueUtils';
import Geosuggest from '../../../../node_modules/react-geosuggest';
import cookie from 'react-cookie';

class Slider extends Component {
  render() {
    const { handleSubmit, pristine, submitting, reset } = this.props;

    return (
      <div>
        {/* SLIDER SECTION START */}
        <div className="slider-2 bg-3 bg-opacity-black-70">
          <div className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
            <div className="find-home-box">
              <div className="section-title text-white">
                <h3>FIND YOUR</h3>
                <h2 className="h1">LOAN HERE</h2>
              </div>
              <div className="find-homes">
                <form
                  onSubmit={handleSubmit(this.submit.bind(this))} >
                  <div className="row">
                    <div className="col-sm-12 col-xs-12">
                      <div className="find-home-item">
                        <Geosuggest placeholder="Property Address" country="us" onSuggestSelect={this.onSuggestSelect.bind(this)}/>
                      </div>
                    </div>
                    <div className="col-sm-6 col-xs-12">
                      <div className="find-home-item">
                        <Field
                          name="purpose"
                          component="select"
                          className="custom-select-2">
                          <option>Select Purpose</option>
                          {
                            PURPOSES.map(purpose => {
                              return <option key={purpose.key} value={purpose.key}>{purpose.value}</option>
                            })
                          }
                        </Field>
                      </div>
                    </div>
                    <div className="col-sm-6 col-xs-12">
                      <div className="find-home-item">
                        <Field
                          name="loan_amount"
                          type="text"
                          component="input"
                          placeholder="Loan amount"
                          normalize={formatCurrency}/>
                      </div>
                    </div>
                    <div className="col-sm-12 col-xs-12">
                      <div className="find-home-item">
                        <Field
                          name="detail"
                          type="text"
                          component="textarea"
                          placeholder="Please give us some details about what you’re looking for."/>
                      </div>
                    </div>
                    <div className="col-xs-12">
                      <div className="row">
                        <div className="col-sm-7 col-xs-12">
                        </div>
                        <div className="col-sm-5 col-xs-12">
                          <div className="find-home-item">
                            <button className="button-1 btn-block btn-hover-1" type="submit" disabled={submitting}>SUBMIT</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* SLIDER SECTION END */}
      </div>
    )
  }

  onSuggestSelect(suggest) {
    let address = {};
    // let gmaps = suggest.gmaps;

    // address.full_text = suggest.gmaps.formatted_address;

    // for (var i = 0; i < gmaps.address_components.length; i++){
    //   let types = gmaps.address_components[i].types.join(",");

    //   if (types == "street_number"){
    //     address.street_number = gmaps.address_components[i].long_name;
    //   }
    //   if (types == "route" || types == "point_of_interest,establishment"){
    //     address.route = gmaps.address_components[i].long_name;
    //   }
    //   if (types == "locality,political"){
    //     address.city = gmaps.address_components[i].long_name;
    //   }
    //   if (types == "administrative_area_level_1,political"){
    //     address.state = gmaps.address_components[i].short_name;
    //   }
    //   if (types == "postal_code"){
    //     address.zip = gmaps.address_components[i].long_name;
    //   }
    //   if (types == "country,political"){
    //     address.country = gmaps.address_components[i].short_name;
    //   }
    // }
    // address.street_address = address.street_number + " " + address.route;

    this.setState({ address: suggest.label });
  }

  submit(fillInfo) {
    if(isAuthenticated()){
      this.props.create({ ...fillInfo, address: this.state.address });
    } else {
      cookie.save("loan_data", JSON.stringify({ ...fillInfo, address: this.state.address }));
      browserHistory.push("/sign-up");
    }
  }
}

function mapStateToProps(state) {
  return {
    errorMessages: state.auth.errors
  }
}

export default connect(mapStateToProps, { create })(
  reduxForm({
    form: 'fillForm'
  })(Slider)
)
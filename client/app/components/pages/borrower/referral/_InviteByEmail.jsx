import React, { Component } from 'react';

class InviteByEmail extends Component {
    render() {
        return (
            <div className="invite-by-email-section">
                <h4 className="mt-20 mb-20">Invite by email</h4>
                <div className="row">
                    <div className="col-md-4 col-xs-12">
                        <div className="">
                            <h5>Email</h5>
                            <input type="text" id="email-1" name="email-1" value="" placeholder="" />
                        </div>
                    </div>
                    <div className="col-md-4 col-xs-12">
                        <div className="">
                            <h5>Name</h5>
                            <input type="email" id="name-1" name="name-1" value="" placeholder="" />
                        </div>
                    </div>
                    <div className="col-md-4 col-xs-12">
                        <div className="">
                            <h5>Phone (Optional)</h5>
                            <input type="text" id="phone-1" name="phone-1" value="" placeholder="" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 col-xs-12">
                        <div className="">
                            <h5>Email</h5>
                            <input type="text" id="email-1" name="email-1" value="" placeholder="" />
                        </div>
                    </div>
                    <div className="col-md-4 col-xs-12">
                        <div className="">
                            <h5>Name</h5>
                            <input type="email" id="name-1" name="name-1" value="" placeholder="" />
                        </div>
                    </div>
                    <div className="col-md-4 col-xs-12">
                        <div className="">
                            <h5>Phone (Optional)</h5>
                            <input type="text" id="phone-1" name="phone-1" value="" placeholder="" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 col-xs-12">
                        <div className="">
                            <h5>Email</h5>
                            <input type="text" id="email-1" name="email-1" value="" placeholder="" />
                        </div>
                    </div>
                    <div className="col-md-4 col-xs-12">
                        <div className="">
                            <h5>Name</h5>
                            <input type="email" id="name-1" name="name-1" value="" placeholder="" />
                        </div>
                    </div>
                    <div className="col-md-4 col-xs-12">
                        <div className="">
                            <h5>Phone (Optional)</h5>
                            <input type="text" id="phone-1" name="phone-1" value="" placeholder="" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 col-xs-12">
                        <p><i className="fa fa-info-circle" aria-hidden="true"></i> For specific information regarding referral bonus, please email us at hello@mortgageclub.co</p>
                        <button className="submit-btn-1 mt-5">
                            <i className="fa fa-paper-plane" aria-hidden="true"></i> SEND INVITES
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default InviteByEmail;

import axios from 'axios';
import { browserHistory } from 'react-router';
import { REFERRAL_INVITE_EMAIL_SUCCESS, REFERRAL_INVITE_LIST_SUCCESS } from '../actions/Types';
import { authFromLocal } from '../utils/AuthUtils';
import {reset} from 'redux-form';

export function invite(inviteEmail) {
    return function (dispatch) {
        axios.post('/referral_email_invitations', inviteEmail, { headers: authFromLocal() })
            .then(response => {
                dispatch(reset('inviteByEmailForm'));
                dispatch({ type: REFERRAL_INVITE_EMAIL_SUCCESS, payload: response.data });
            })
            .catch(error => {
                handleError(dispatch);
            })
    }
}

export function getAll(){
    return function(dispatch) {
        axios.get('/invited_referrals', { headers: authFromLocal() })
            .then(response => {
                dispatch({ type: REFERRAL_INVITE_LIST_SUCCESS, payload: response.data });
            })
            .catch(error => {
                console.log(error);
            })
    }
}

function handleError(dispatch) {
}

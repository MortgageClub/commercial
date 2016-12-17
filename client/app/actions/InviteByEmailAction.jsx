import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, DE_AUTH_USER } from '../actions/Types';
import { authFromLocal } from '../utils/AuthUtils'

export function invite(inviteEmail) {
    return function (dispatch) {
        axios.post('/referral_email_invitations', inviteEmail, { headers: authFromLocal() })
            .then(response => {
                handleSuccessAuthen(dispatch, response.data.data, response.headers);
                browserHistory.push('/dashboard');
            })
            .catch(error => {
                var data = error.response.data;
                dispatch(authError(data.errors));
            })
    }
}

function handleSuccessAuthen(dispatch, data, headers) {
    dispatch({ type: AUTH_USER, payload: data });
    localStorage.setItem('auth', authFromHeader(headers));
    // browserHistory.push('/dashboard');
    dispatch(authError(null));
}

function handleErrorAuthen(dispatch) {
    dispatch({ type: DE_AUTH_USER });
    localStorage.removeItem('auth');
    browserHistory.push('');
}

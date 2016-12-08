import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, DE_AUTH_USER } from '../actions/Types';
import { authError, authFromHeader, authFromLocal } from '../utils/AuthUtils'

export function login(userInfo) {
  return function (dispatch) {
    axios.post('/auth/sign_in', userInfo)
      .then(response => {
        handleSuccessAuthen(dispatch, response);
      })
      .catch(error => {
        var data = error.response.data;
        dispatch(authError(data.errors));
      })
  }
}

export function register(userInfo) {
  return function (dispatch) {
    axios.post('/auth', userInfo)
      .then(response => {
        handleSuccessAuthen(dispatch, response);
      })
      .catch(error => {
        var data = error.response.data;
        dispatch(authError(data.errors));
      })
  }
}

export function logout() {
  return function (dispatch) {
    axios.delete('/auth/sign_out', { headers: authFromLocal() })
      .then(response => {
        dispatch({ type: DE_AUTH_USER });
        localStorage.removeItem('auth');
        browserHistory.push('');
      })
      .catch(error => {
        dispatch({ type: DE_AUTH_USER });
        localStorage.removeItem('auth');
        browserHistory.push('');
      })
  }
}

function handleSuccessAuthen(dispatch, response) {
  dispatch({ type: AUTH_USER, payload: response.data.data });
  localStorage.setItem('auth', authFromHeader(response.headers));
  browserHistory.push('');
  dispatch(authError(null));
}

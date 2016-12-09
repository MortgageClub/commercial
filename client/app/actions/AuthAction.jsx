import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, DE_AUTH_USER } from '../actions/Types';
import { authError, authFromHeader, authFromLocal } from '../utils/AuthUtils'

export function login(userInfo) {
  return function (dispatch) {
    axios.post('/auth/sign_in', userInfo)
      .then(response => {
        handleSuccessAuthen(dispatch, response.data.data, response.headers);
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
        handleSuccessAuthen(dispatch, response.data.data, response.headers);
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
        handleErrorAuthen(dispatch);
      })
      .catch(error => {
        handleErrorAuthen(dispatch);
      })
  }
}

export function fetch() {
  return function (dispatch) {
    axios.get('/users/fetch', { headers: authFromLocal() })
      .then(response => {
        handleSuccessAuthen(dispatch, response.data, response.headers);
      })
      .catch(error => {
        handleErrorAuthen(dispatch);
      })
  }
}

function handleSuccessAuthen(dispatch, data, headers) {
  dispatch({ type: AUTH_USER, payload: data });
  localStorage.setItem('auth', authFromHeader(headers));
  browserHistory.push('/dashboard');
  dispatch(authError(null));
}

function handleErrorAuthen(dispatch) {
  dispatch({ type: DE_AUTH_USER });
  localStorage.removeItem('auth');
  browserHistory.push('');
}

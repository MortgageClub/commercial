import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, DE_AUTH_USER } from '../actions/Types';
import { authError, authFromResponse, headersFromLocal } from '../utils/AuthUtils'

export function login(userInfo) {
  return function (dispatch) {
    axios.post('/auth/sign_in',
        userInfo
      )
      .then(response => {
        handleSuccessAuthen(dispatch, response);
        browserHistory.push('/dashboard');
      })
      .catch(error => {
        var data = error.response.data;
        dispatch(authError(data.errors));
      })
  }
}

export function register(userInfo) {
  return function (dispatch) {
    axios.post('/auth',
        userInfo
      )
      .then(response => {
        handleSuccessAuthen(dispatch, response);
        browserHistory.push('/dashboard');
      })
      .catch(error => {
        var data = error.response.data;
        dispatch(authError(data.errors));
      })
  }
}

export function logout() {
  return function (dispatch) {
    axios.delete('/auth/sign_out', {
        headers: headersFromLocal()
      })
      .then(response => {});

    handleLogOut(dispatch);
  }
}

function handleLogOut(dispatch) {
  dispatch({ type: DE_AUTH_USER });
  localStorage.removeItem('auth');
}

function handleSuccessAuthen(dispatch, response) {
  dispatch({ type: AUTH_USER, payload: response.data });
  localStorage.setItem('auth', authFromResponse(response));
  dispatch(authError(null));
}

function handleErrorAuthen(dispatch) {
  dispatch({ type: DE_AUTH_USER });
  localStorage.removeItem('auth');
  browserHistory.push('');
}

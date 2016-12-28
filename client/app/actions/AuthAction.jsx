import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_ERROR, AUTH_USER, DE_AUTH_USER, REMOVE_AUTH_ERRORS, ADD_AUTH_ERROR } from '../actions/Types';
import { authError, authFromResponse, headersFromLocal } from '../utils/AuthUtils'

export function login(userInfo) {
  return function (dispatch) {
    axios.post('/sessions',
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
    axios.post('/registrations',
        userInfo
      )
      .then(response => {
        handleSuccessAuthen(dispatch, response);
        browserHistory.push('/dashboard');
      })
      .catch(error => {
        console.log(error.response);
        var data = error.response.data;
        dispatch(authError(data.errors));
      })
  }
}

export function logout() {
  return function (dispatch) {
    axios.delete('/sessions', {
        headers: headersFromLocal()
      })
      .then(response => {});

    handleLogOut(dispatch);
  }
}

export function resetPassword(info) {
  return function (dispatch) {
    axios.post('/passwords',
      info
    )
    .then(response => {
      browserHistory.push('/login');
    })
    .catch(error => {
      var data = error.response.data;
      dispatch(authError(data.errors));
    })
  }
}

export function changePassword(passwordInfo) {
  return function (dispatch) {
    axios.patch('/passwords',
      passwordInfo
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

export function removeErrors(){
  return function (dispatch) {
    dispatch({ type: REMOVE_AUTH_ERRORS });
  }
}

export function addError(error){
  return function (dispatch) {
    dispatch({ type: AUTH_ERROR, payload: error });
  }
}

function handleLogOut(dispatch) {
  dispatch({ type: DE_AUTH_USER });
  localStorage.removeItem('auth');
  browserHistory.push('');
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

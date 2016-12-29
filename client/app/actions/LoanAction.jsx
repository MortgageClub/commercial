import axios from 'axios';
import { browserHistory } from 'react-router';
import { LOANS_LIST, LOAN_DETAILS } from '../actions/Types';
import { headersFromLocal } from '../utils/AuthUtils';

export function getAll() {
  return function (dispatch) {
    axios.get('/loans', {
      headers: headersFromLocal()
    })
    .then(response => {
      dispatch({ type: LOANS_LIST, payload: response.data });
    })
    .catch(error => {
      console.log(error);
    })
  }
}

export function updateShowedGuide(loanId) {
  return function (dispatch) {
    axios.patch('/loans/' + loanId + '/update_showed_guide', 
    {}, {
      headers: headersFromLocal()
    })
    .then(response => {
      dispatch({ type: LOAN_DETAILS, payload: response.data });
    })
    .catch(error => {
      console.log(error);
    })
  }
}

export function create(loanInfo) {
  return function (dispatch) {
    axios.post('/loans', {
      loan: loanInfo
    }, {
      headers: headersFromLocal()
    })
    .then(response => {
      browserHistory.push('/dashboard');
    })
    .catch(error => {
      console.log(error);
    })
  }
}

export function fetch(loanId) {
  return function (dispatch) {
    axios.get('/loans/' + loanId, {
      headers: headersFromLocal()
    })
    .then(response => {
      dispatch({ type: LOAN_DETAILS, payload: response.data });
    })
    .catch(error => {
      console.log(error);
    })
  }
}

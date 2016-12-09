import axios from 'axios';
import { browserHistory } from 'react-router';
import { LOANS_LIST } from '../actions/Types';
import { authFromLocal } from '../utils/AuthUtils'

export function getAll() {
  return function (dispatch) {
    axios.get('/loans', { headers: authFromLocal() })
      .then(response => {
        dispatch({ type: LOANS_LIST, payload: response.data });
      })
      .catch(error => {
        console.log(error);
      })
  }
}

export function create(loanInfo) {
  return function (dispatch) {
    axios.post('/loans', { loan: loanInfo }, { headers: authFromLocal() })
      .then(response => {
        browserHistory.push('/dashboard');
      })
      .catch(error => {
        console.log(error);
      })
  }
}

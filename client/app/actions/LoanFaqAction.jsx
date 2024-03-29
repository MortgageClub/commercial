import axios from 'axios';
import { browserHistory } from 'react-router';
import { LOAN_FAQS_LIST } from '../actions/Types';
import { headersFromLocal } from '../utils/AuthUtils';

export function getAll() {
  return function (dispatch) {
    axios.get('/loan_faqs', {
        headers: headersFromLocal()
      })
      .then(response => {
        dispatch({ type: LOAN_FAQS_LIST, payload: response.data });
      })
      .catch(error => {
        console.log(error);
      })
  }
}

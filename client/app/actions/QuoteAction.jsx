import axios from 'axios';
import { browserHistory } from 'react-router';
import { LOAN_DETAILS } from '../actions/Types';
import { headersFromLocal } from '../utils/AuthUtils';

export function select(quote_id) {
  return function (dispatch) {
    axios.patch('/quotes/' + quote_id, {}, {
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

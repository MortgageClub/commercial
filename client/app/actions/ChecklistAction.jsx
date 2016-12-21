import axios from 'axios';
import { browserHistory } from 'react-router';
import { headersFromLocal } from '../utils/AuthUtils'
import { LOAN_DETAILS } from '../actions/Types';

export function mark_done(id) {
  return function (dispatch) {
    axios.post('/checklists/mark_done', {
        id: id
      }, {
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

import axios from 'axios';
import { browserHistory } from 'react-router';
import { authFromLocal } from '../utils/AuthUtils'
import { LOAN_DETAILS } from '../actions/Types';

export function upload(document) {
  return function (dispatch) {
    let data = new FormData();
    data.append('checklist_id', document.checklist_id);
    data.append('file', document.file);

    axios.post('/documents/upload', data, { headers: authFromLocal() })
      .then(response => {
        dispatch({ type: LOAN_DETAILS, payload: response.data });
      })
      .catch(error => {
        console.log(error);
      })
  }
}

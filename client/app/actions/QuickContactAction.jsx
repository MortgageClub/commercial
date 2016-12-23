import axios from 'axios';
import { browserHistory } from 'react-router';
import { headersFromLocal } from '../utils/AuthUtils';
import {reset} from 'redux-form';

export function send(quickContact) {
  return function (dispatch) {
    axios.post('/quick_contacts',
      quickContact, {
        headers: headersFromLocal()
      })
      .then(response => {
        dispatch(reset('quickContactForm'));
      })
      .catch(error => {
        console.log(error);
      })
  }
}
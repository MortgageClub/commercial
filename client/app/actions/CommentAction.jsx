import axios from 'axios';
import { BLOG_DETAILS } from '../actions/Types';
import { headersFromLocal } from '../utils/AuthUtils';
import { reset } from 'redux-form';

export function create(commentInfo) {
  return function (dispatch) {
    axios.post('/comments',
      commentInfo, {
      headers: headersFromLocal()
    })
    .then(response => {
      dispatch(reset('commentForm'));
      dispatch({ type: BLOG_DETAILS, payload: response.data });
    })
    .catch(error => {
      console.log(error);
    })
  }
}

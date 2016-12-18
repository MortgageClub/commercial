import axios from 'axios';
import { browserHistory } from 'react-router';
import { authFromLocal } from '../utils/AuthUtils'
import { LASTEST_BLOGS, BLOGS_LIST, BLOG_DETAILS } from '../actions/Types';

export function getFooterBlogs() {
  return function (dispatch) {
    axios.get('/blogs', {
        params: {
          size: 3,
          type: "simple"
        }
      })
      .then(response => {
        dispatch({ type: LASTEST_BLOGS, payload: response.data });
      })
      .catch(error => {
        console.log(error);
      })
  }
}

export function fetch(id) {
  return function (dispatch) {
    axios.get('/blogs/' + id)
      .then(response => {
        dispatch({ type: BLOG_DETAILS, payload: response.data });
      })
      .catch(error => {
        console.log(error);
      })
  }
}

export function getAll(size) {
  return function (dispatch) {
    axios.get('/blogs', {
        params: {
          size: size,
          type: "detail"
        }
      })
      .then(response => {
        dispatch({ type: BLOGS_LIST, payload: response.data });
      })
      .catch(error => {
        console.log(error);
      })
  }
}
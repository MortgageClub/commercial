import axios from 'axios';
import { browserHistory } from 'react-router';
import { LASTEST_BLOGS, BLOGS_LIST, BLOG_DETAILS, RECENT_BLOGS } from '../actions/Types';

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

export function getAll(size, blogType) {
  return function (dispatch) {
    axios.get('/blogs', {
        params: {
          size: size,
          type: "detail",
          blog_type: blogType
        }
      })
      .then(response => {
        if(size == 4){
          dispatch({ type: RECENT_BLOGS, payload: response.data });
        }else{
          dispatch({ type: BLOGS_LIST, payload: response.data });
        }
      })
      .catch(error => {
        console.log(error);
      })
  }
}
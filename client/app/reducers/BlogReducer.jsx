import { LASTEST_BLOGS, BLOGS_LIST, BLOG_DETAILS } from '../actions/Types';

export default function (state = {}, action) {
  switch (action.type) {
    case LASTEST_BLOGS:
      return { ...state, footer_blogs: action.payload };
    case BLOGS_LIST:
      return { ...state, blogs_page: action.payload };
    case BLOG_DETAILS:
      return { ...state, details: action.payload };
  }
  return state;
}

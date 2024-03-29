import { AUTH_USER, DE_AUTH_USER, AUTH_ERROR, REMOVE_AUTH_ERRORS } from '../actions/Types';

export default function (state = {}, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true, userInfo: action.payload };
    case DE_AUTH_USER:
      return { ...state, authenticated: false };
    case AUTH_ERROR:
      return { ...state, errors: action.payload };
    case REMOVE_AUTH_ERRORS:
      return { ...state, errors: null };
  }
  return state;
}

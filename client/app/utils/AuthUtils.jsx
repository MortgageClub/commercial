import { AUTH_ERROR } from '../actions/Types';

export function authError(errors) {
  return {
    type: AUTH_ERROR,
    payload: errors
  }
}

export function userFromLocal() {
  return isAuthenticated() ? authFromLocal().user : {}
}

export function headersFromLocal() {
  return isAuthenticated() ? authFromLocal().headers : {}
}

export function authFromLocal() {
  return JSON.parse(localStorage.getItem('auth'));
}

export function isAuthenticated() {
  return localStorage.getItem('auth');
}

export function authFromResponse(data) {
  const headers = data.headers;

  return JSON.stringify({
    user: data.user,
    headers: {
      'access-token': headers['access-token'],
      'uid': headers['uid'],
      'client': headers['client']
    }
  });
}

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
  return localStorage.getItem('auth') != null;
}

export function updateAuth(newAuth) {
  localStorage.setItem('auth', JSON.stringify(newAuth));
  return true;
}

export function authFromResponse(response) {
  const headers = response.headers;
  return JSON.stringify({
    user: response.data,
    headers: {
      'access-token': headers['access-token'],
      'uid': headers['uid'],
      'client': headers['client']
    }
  });
}

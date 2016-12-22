import axios from 'axios';

export function rootUrl() {
  switch (process.env.NODE_ENV) {
    case "production":
      return "https://www.blacklinelending.com/api";
    case "staging":
      return "https://stg-equity.herokuapp.com/api";
    default:
      return "http://localhost:3000/api"
  }
}

export function configApi() {
  axios.defaults.baseURL = rootUrl();
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  axios.defaults.headers.common['Accept'] = 'application/json; version=v1';
}

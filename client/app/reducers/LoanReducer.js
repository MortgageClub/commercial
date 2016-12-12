import { LOANS_LIST, LOAN_DETAILS } from '../actions/Types';

export default function (state = {}, action) {
  switch (action.type) {
    case LOANS_LIST:
      return { ...state, loans: action.payload };
    case LOAN_DETAILS:
      return { ...state, loan: action.payload };
  }
  return state;
}

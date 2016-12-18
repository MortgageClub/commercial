import { LOANS_LIST, LOAN_DETAILS, LOAN_FAQS_LIST } from '../actions/Types';

export default function (state = {}, action) {
  switch (action.type) {
    case LOANS_LIST:
      return { ...state, loans: action.payload };
    case LOAN_DETAILS:
      return { ...state, loan: action.payload };
    case LOAN_FAQS_LIST:
      return { ...state, loan_faqs: action.payload };
  }
  return state;
}

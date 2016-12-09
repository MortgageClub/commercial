import { LOANS_LIST } from '../actions/Types';

export default function (state = {}, action) {
  switch (action.type) {
    case LOANS_LIST:
      return { ...state, all: action.payload };
  }
  return state;
}

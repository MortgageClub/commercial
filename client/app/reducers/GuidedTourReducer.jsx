import { ADD_GUIDED_TOUR_STEP } from '../actions/Types';

export default function (state = {}, action) {
  switch (action.type) {
    case ADD_GUIDED_TOUR_STEP:
      return { ...state, all: (state.all || []).concat(action.payload) };
  }
  return state;
}

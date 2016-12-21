import { ADD_GUIDED_TOUR_STEP } from '../actions/Types';

export function addStep(steps) {
  return function (dispatch) {
    dispatch({ type: ADD_GUIDED_TOUR_STEP, payload: steps });
  }
}
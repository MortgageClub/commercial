import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './AuthReducer';
import loanReducer from './LoanReducer';

const RootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  dashboard: loanReducer
});

export default RootReducer;

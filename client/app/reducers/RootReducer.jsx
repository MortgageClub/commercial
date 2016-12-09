import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import authReducer from './AuthReducer';
import loanReducer from './LoanReducer';

const RootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  auth: authReducer,
  loans: loanReducer
});

export default RootReducer;

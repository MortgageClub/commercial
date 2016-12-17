import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './AuthReducer';
import loanReducer from './LoanReducer';
import blogReducer from './BlogReducer';

const RootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  dashboard: loanReducer,
  blog: blogReducer
});

export default RootReducer;

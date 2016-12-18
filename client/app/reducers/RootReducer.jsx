import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './AuthReducer';
import loanReducer from './LoanReducer';
import inviteByEmailReducer from './InviteByEmailReducer';

const RootReducer = combineReducers({
    form: formReducer,
    auth: authReducer,
    dashboard: loanReducer,
    inviteByEmail: inviteByEmailReducer
});

export default RootReducer;

import React from 'react';
import ReactOnRails from 'react-on-rails';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router, browserHistory, applyRouterMiddleware } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/RootReducer';
import routes from './routes';
import { useScroll } from 'react-router-scroll';

const storeWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = storeWithMiddleware(reducers);

const App = (_props, _railsContext) => {
  return (
    <Provider store={store}>
      <Router history={browserHistory} render={applyRouterMiddleware(useScroll())}>
        {routes}
      </Router>
    </Provider>
  );
};

ReactOnRails.register({ App });

// Startup config
import { userFromLocal, isAuthenticated } from './utils/AuthUtils';
import { configApi } from './settings/ApiConfig';
import { AUTH_USER } from './actions/Types';

configApi();

if(isAuthenticated()){
  store.dispatch({ type: AUTH_USER, payload: userFromLocal() })
}
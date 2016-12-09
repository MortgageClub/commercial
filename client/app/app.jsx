import React from 'react';
import ReactOnRails from 'react-on-rails';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/RootReducer';
import routes from './routes';
import { syncHistoryWithStore } from 'react-router-redux';

const storeWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = storeWithMiddleware(reducers);
const history = syncHistoryWithStore(browserHistory, store);

const App = (_props, _railsContext) => {
  return (
    <Provider store={store}>
      <Router history={history}>
        {routes}
      </Router>
    </Provider>
  );
};

ReactOnRails.register({ App });

import { configApi } from './settings/ApiConfig';

configApi();
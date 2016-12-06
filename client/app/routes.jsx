import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Index from './components/Index'
import Home from './components/pages/home/Index'

export default (
  <Route path="/" component={Index}>
     <IndexRoute component={Home}/>
  </Route>
);

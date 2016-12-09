import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Index from './components/Index';
import Home from './components/pages/home/Index';
import Login from './components/pages/auth/Login';
import Register from './components/pages/auth/Register';
import ForgotPassword from './components/pages/auth/ForgotPassword';
import Dashboard from './components/pages/borrower/Dashboard';

export default (
  <Route path="/" component={Index}>
    <IndexRoute component={Home}/>
    <Route path="login" component={Login} />
    <Route path="register" component={Register} />
    <Route path="forgot-password" component={ForgotPassword} />
    <Route path="dashboard" component={Dashboard} />
  </Route>
);

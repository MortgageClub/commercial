import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Index from './components/Index';
import Home from './components/pages/home/Index';
import Blog from './components/pages/home/Blog';
import Services from './components/pages/home/Services';
import About from './components/pages/home/About';
import BlogDetails from './components/pages/home/BlogDetails';
import Login from './components/pages/auth/Login';
import Register from './components/pages/auth/Register';
import ForgotPassword from './components/pages/auth/ForgotPassword';
import BorrowerDashboard from './components/pages/borrower/Dashboard';
import LoanDashboard from './components/pages/borrower/loan/show/Index';

export default (
  <Route path="/" component={Index}>
    <IndexRoute component={Home}/>
    <Route path="/login" component={Login} />
    <Route path="/blog" component={Blog} />
    <Route path="/services" component={Services} />
    <Route path="/about" component={About} />
    <Route path="/sign-up" component={Register} />
    <Route path="/forgot-password" component={ForgotPassword} />
    <Route path="/dashboard" component={BorrowerDashboard} />
    <Route path="/loans/:id" component={LoanDashboard} />
    <Route path="/blog/:id" component={BlogDetails} />
  </Route>
);

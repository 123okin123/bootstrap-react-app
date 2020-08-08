import React from 'react';
import {BrowserRouter as ReactRouter, Switch, Route, Link } from 'react-router-dom';
import SignUpPage from './pages/sign-up';
import LoginPage from './pages/login';
import PrivateRoute from './components/private-route';

export default function Router() {
    return (<ReactRouter>
      <Switch>
        <PrivateRoute exact path="/">
          <p>hello</p>
        </PrivateRoute>
        <Route path="/login">
          <LoginPage/>
        </Route>
        <Route path="/sign-up">
          <SignUpPage />
        </Route>
      </Switch>
   
  </ReactRouter>)
}
import React from 'react';
import {BrowserRouter as ReactRouter, Switch, Route, Link } from 'react-router-dom';
import SignUpPage from './pages/sign-up';
import LoginPage from './pages/login';

export default function Router() {
    return (<ReactRouter>
      <Switch>
        <Route exact path="/">
          
        </Route>
        <Route path="/login">
          <LoginPage/>
        </Route>
        <Route path="/sign-up">
          <SignUpPage />
        </Route>
      </Switch>
   
  </ReactRouter>)
}
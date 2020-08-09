import React, { ReactElement } from 'react';
import { BrowserRouter as ReactRouter, Switch, Route } from 'react-router-dom';
import SignUpPage from './pages/sign-up';
import LoginPage from './pages/login';
import PrivateRoute from './components/private-route';
import HomePage from './pages/home';

export default function Router(): ReactElement {
  return (
    <ReactRouter>
      <Switch>
        <PrivateRoute exact path="/">
          <HomePage />
        </PrivateRoute>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/sign-up">
          <SignUpPage />
        </Route>
      </Switch>
    </ReactRouter>
  );
}

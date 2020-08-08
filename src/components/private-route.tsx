import { Route, Redirect, RouteProps } from "react-router-dom";
import React from 'react';


const fakeAuth = {
    isAuthenticated: false
}

export default function PrivateRoute({ children, ...rest }: RouteProps) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          fakeAuth.isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
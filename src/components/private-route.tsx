import { Route, Redirect, RouteProps } from 'react-router-dom';
import React, { ReactElement } from 'react';

export default function PrivateRoute({ children, ...rest }: RouteProps): ReactElement {
  const token = localStorage.getItem('token');
  return (
    <Route
      {...rest}
      render={({ location }) =>
        token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

import React, { ReactElement } from 'react';
import './app.css';
import Router from './router';
import { ApiContainer } from './hooks/useApi';

export default function App(): ReactElement {
  return (
    <ApiContainer.Provider>
      <Router />
    </ApiContainer.Provider>
  );
}

import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppRoutes } from './routes';
import { GlobalStyles } from './styles/global';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyles/>
    <AppRoutes/>
  </React.StrictMode>
);
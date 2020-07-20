import React from 'react';
import { Dashboard } from './dashboard';
import GlobalStyle from '../theme/globalStyles';

interface Key {
  [key: string]: any;
}

export const App: React.FC = () => {
  return (
    <><GlobalStyle />
    <Dashboard></Dashboard></>
  );
}


import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { setupStore } from '@app/store';

import { App } from './App';

import './index.css';

const store = setupStore();

ReactDOM.hydrateRoot(
  document.querySelector('#root') as HTMLElement,
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

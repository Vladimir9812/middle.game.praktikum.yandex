import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { setupStore } from '@app/store';

import { App } from './App';

import './index.css';

const store = setupStore();

function startServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register(import.meta.env.PROD ? `${import.meta.env.BASE_URL}sw.js` : '/sw.js')
        .then((registration) => {
          /* eslint-disable-next-line no-console */
          console.log('ServiceWorker registration successful with scope:', registration.scope);
        })
        .catch((error: string) => {
          /* eslint-disable-next-line no-console */
          console.log('ServiceWorker registration failed:', error);
        });
    });
  }
}

ReactDOM.createRoot(document.querySelector('#root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

startServiceWorker();

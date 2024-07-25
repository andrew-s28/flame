import React from 'react';
import './index.css';

import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import { store } from './store/store';

import { App } from './App';

const container = document.getElementById('root');
if (!container) {
  throw new Error('Could not find root element');
}
console.log(container);
const root = createRoot(container);
console.log(root);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import io from 'socket.io-client';
import createStoreWithMiddlewareAndSocket from './store/setupStore';
import App from './App';

const socket = io();
const store = createStoreWithMiddlewareAndSocket(socket);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);

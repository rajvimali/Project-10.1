import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import store from './store';
import App from './App';
// import store from './Components/Store';
import Store from './Components/Store';
// import store from './Components/Store';

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

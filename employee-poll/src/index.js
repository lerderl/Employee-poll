import React from 'react';
// import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { legacy_createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
// import { configureStore } from '@reduxjs/toolkit';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import './index.css';
import reducer from './reducers';
import App from './components/App';
import middleware from './middleware';
// import logger from './middleware/logger';
import reportWebVitals from './reportWebVitals';

// const store = configureStore({ reducer, middleware: [thunk, logger] });
const store = legacy_createStore(reducer, middleware);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

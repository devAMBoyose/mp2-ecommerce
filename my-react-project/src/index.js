import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// eslint-disable-next-line no-unused-vars
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import * as serviceWorker from "./serviceWorker";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductProvider } from "./context";
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
ReactDOM.render(
  <ProductProvider>
    <Router>
    <PayPalScriptProvider option ={{ 'client-id': 'your-client-id'}}></PayPalScriptProvider>
      <App />
    </Router>
  </ProductProvider>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <Router>
//     <App />
//     <ProductProvider/>
//   </Router>,document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
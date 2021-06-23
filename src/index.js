import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';







ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
document.getElementById('root')
);

//
// const express = require('express');
// const app = express();
//
//
//
//
//
//
// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`Now listening to ${port}...`));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

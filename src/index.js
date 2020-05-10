import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './base.css';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Route component={App} />
  </BrowserRouter>,
  document.getElementById('root'),
);

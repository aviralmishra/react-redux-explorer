import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import 'babel-polyfill';

import './app.scss';
import './assets/images/favicon.ico';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './components/App.jsx';

ReactDOM.render((
  <BrowserRouter>
    <MuiThemeProvider><App/></MuiThemeProvider>
  </BrowserRouter>
), document.getElementById('app'));

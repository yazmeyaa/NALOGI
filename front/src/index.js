import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createGlobalStyle} from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom';

const Global = createGlobalStyle`
body{
  padding: 0px;
  margin: 0px;
}
`
ReactDOM.render(
  <Router>
    <Global />
      <App />
  </Router>,
  document.getElementById('root')
);
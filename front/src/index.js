import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createGlobalStyle} from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom';
import { DataProvider } from './Context/DataContext';


const Global = createGlobalStyle`
body{
  padding: 0px;
  margin: 0px;
}
`
ReactDOM.render(
  <DataProvider>
    <Router>
      <Global />
        <App />
    </Router>
  </DataProvider>,
  document.getElementById('root')
);
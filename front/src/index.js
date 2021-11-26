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

@font-face{
  font-family: "Lab Grotesque";
  src: url(${require('./fonts/LabGrotesque-Bold.ttf').default});
  font-weight: bold;
  font-style: normal;
}

@font-face{
  font-family: "Lab Grotesque";
  src: url(${require('./fonts/LabGrotesque-Medium.ttf').default});
  font-weight: 500;
  font-style: normal;
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
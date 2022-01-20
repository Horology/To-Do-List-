import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {AppProvider} from './contexts/appcontext';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>
  ,document.getElementById('root')
);

reportWebVitals();

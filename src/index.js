import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App prop1={'hello world'} />
  </React.StrictMode>,
  document.getElementById('root')
);



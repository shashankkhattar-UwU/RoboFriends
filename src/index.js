import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Card from './Card';
// import CardList from './CardList';
import App from "./containers/App";
import reportWebVitals from './reportWebVitals';
import 'tachyons';
// import { robots } from "./Robots";
ReactDOM.render(
  <React.StrictMode>
    <div>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

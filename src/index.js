import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SubmitForm from './challenges/SubmitPage.js'
import Game from './challenges/GamePage.js'
import Table from './roulette/Table.js'

ReactDOM.render(
  <React.StrictMode>
//    <Game />
    <Table />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

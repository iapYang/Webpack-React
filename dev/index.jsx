import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './component/calculator.jsx';
import Game from './component/game.jsx';
import './styles/index.scss';
import './scripts/index.js';

// ReactDOM.render(
//   <Calculator />,
//   document.getElementById('root')
// );

ReactDOM.render(
  <Game />,
  document.getElementById('container')
);

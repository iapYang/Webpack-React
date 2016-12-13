import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './component/calculator.jsx';
import Game from './component/game.jsx';
import Nav from './component/nav.jsx';
import Input from './component/input.jsx';
import './styles/index.scss';
import './scripts/index.js';

// ReactDOM.render(
//   <Calculator />,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <Game />,
//   document.getElementById('container')
// );

ReactDOM.render(
  <Nav />,
  document.getElementById('nav')
);

ReactDOM.render(
  <Input />,
  document.getElementById('input')
);

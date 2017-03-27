import React from 'react';
import ReactDOM from 'react-dom';

import '../style/tutorial.scss';

import Calculator from '../component/calculator.jsx';
import Game from '../component/game.jsx';
import Nav from '../component/nav.jsx';
import Input from '../component/input.jsx';
import Plus from '../component/plus.jsx';
import Query from '../component/query.jsx';
import Filter from '../component/Filter';

// ReactDOM.render(
//   <Calculator />,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <Game />,
//   document.getElementById('container')
// );

// tutorial start

ReactDOM.render(
  <Nav />,
  document.getElementById('nav')
);

ReactDOM.render(
  <Input />,
  document.getElementById('input')
);

ReactDOM.render(
  <Plus />,
  document.getElementById('plus')
);

ReactDOM.render(
  <Query />,
  document.getElementById('query')
);

ReactDOM.render(
  <Filter />,
  document.getElementById('filter')
);

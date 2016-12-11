import React from 'react';
import Board from './board.jsx';

class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            xIsNext: true
        };
    }
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>
                        {/* status */}
                    </div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

var player = {score: 1, name: 'Jeff'};

var newPlayer = Object.assign({}, player, {score: 2});
// Now player is unchanged, but newPlayer is {score: 2, name: 'Jeff'}

// Or if you are using object spread, you can write:
// var newPlayer = {score: 2, ...player};

export default Game;

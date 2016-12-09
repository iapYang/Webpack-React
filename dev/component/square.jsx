import React from 'react';

class Square extends React.Component {
    constructor() {
        super();
        this.clickHandler = this.clickHandler.bind(this);
        this.state = {
            value: null,
        };
    }

    clickHandler() {
        this.setState({
            value: 'X',
        });
    }
    render() {
        return (
            <div
                className="square"
                onClick={this.clickHandler}>
                <span>
                    {this.state.value}
                </span>
            </div>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default Square;

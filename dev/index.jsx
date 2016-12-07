import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import './component/index.js';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    render() {
        return (
            <div>
                <h1>
                    Hello, world!
                </h1>
                <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

function App() {
    return (
        <div>
            <Clock date={new Date()}/>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

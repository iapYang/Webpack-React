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
        this.props.onClick();
    }
    render() {
        return (
            <div
                className="square"
                onClick={this.clickHandler}>
                <span>
                    {this.props.value}
                </span>
            </div>
        );
    }
}


export default Square;

import React from 'react';
import classNames from 'classNames';

class Input extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 'Edit me.',
            show: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleBodyClick = this.handleBodyClick.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleBodyClick(event) {
        event.stopPropagation();
        this.setState(prevState => ({
            show: !prevState.show,
        }));
    }
    handleClick(event) {
        this.setState({
            show: false,
        });
    }
    handleFormClick(event) {
        event.stopPropagation();
    }
    render () {
        return (
            <div className='input-wrapper' onClick={this.handleClick} >
                <form
                    className={classNames({'input-form': true,
                        show: this.state.show})}>
                    <input
                        type='text'
                        value={this.state.value}
                        onChange={this.handleChange}
                        onClick={this.handleFormClick} />
                </form>
                <div
                    className='input-body'
                    onClick={this.handleBodyClick} >
                    <div
                        className='input-body-wrapper'>
                        <span className='input-pencil'>✎</span>
                        <span className='input-content'>
                            {this.state.value}
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Input;

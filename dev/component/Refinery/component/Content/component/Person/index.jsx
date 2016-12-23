import React from 'react';
import classNames from 'classNames';

import database from '../../module/database.js';
import util from '../../module/util.js';

class Index extends React.Component {
    constructor() {
        super();

        this.state = {
            choice: -1,
            'next-disabled': true,
        };
    }
    componentWillMount() {
        if (!util.isEmpty(this.props.status)) {
            this.setState(this.props.status);
        }
    }
    handleNextClick() {
        if (this.state['next-disabled']) return;

        this.props.onNextClick.call(this, this.props.index, this.state);
    }
    handleClick(i) {
        this.setState({
            choice: i,
            'next-disabled': false,
        });
    }
    render () {
        const btn_class = classNames({
            'btn-next': true,
            disabled: this.state['next-disabled'],
        });

        return (
            <div className='person frame'>
                <div className='wrapper'>
                    <div className='title'>
                        <span>Who are you shopping for?</span>
                    </div>
                    <List
                        onClick={this.handleClick.bind(this)}
                        person_choice={this.state.choice}
                        pictures={database.pictures}
                        />
                    <div
                        className={btn_class}
                        onClick={this.handleNextClick.bind(this)}
                        >
                        <span className='text'>ONWARD</span>
                        <span className='symbol'>l</span>
                    </div>
                </div>
            </div>
        );
    }
}

function List(props) {
    const listItems = props.pictures.map((picture, index) =>
        <li
            key={`list_${index}`}
            onClick={props.onClick.bind(this, index)}
            className={index === props.person_choice ? 'active' : 'inactive'}
            >
            <div className='picture'>
                <img src={`./images/${picture.noraml}`} className='normal'/>
                <img src={`./images/${picture.hover}`} className='hover'/>
            </div>
            <div className='name'>
                <span>{picture.name}</span>
            </div>
        </li>
    );

    return (
        <ul className='grid-wrapper'>
            {listItems}
        </ul>
    );
}

export default Index;

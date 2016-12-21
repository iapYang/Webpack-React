import React from 'react';
import classNames from 'classNames';

class Index extends React.Component {
    render () {
        const class_name = classNames({
            person: true,
            frame: true,
        });

        const ifDisabled = this.props.ifDisabledArray[this.props.index];

        const btn_class = classNames({
            'btn-next': true,
            disabled: ifDisabled,
        });

        return (
            <div className={class_name}>
                <div className='wrapper'>
                    <div className='title'>
                        <span>Who are you shopping for?</span>
                    </div>
                    <List
                        onClick={this.props.onPersonClick.bind(this)}
                        person_choice={this.props.person_choice}
                        pictures={this.props.pictures}
                        />
                    <div
                        className={btn_class}
                        onClick={this.props.onNextClick.bind(this, this.props.index)}
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

import React from 'react';
import classNames from 'classNames';

const pictures = [{
    noraml: 'mom.svg',
    hover: 'mom_hover.svg',
    name: 'mom',
}, {
    noraml: 'dad.svg',
    hover: 'dad_hover.svg',
    name: 'dad',
}, {
    noraml: 'so.svg',
    hover: 'so_hover.svg',
    name: 's.o.',
}, {
    noraml: 'bff.svg',
    hover: 'bff_hover.svg',
    name: 'bff',
}, {
    noraml: 'work.svg',
    hover: 'work_hover.svg',
    name: 'work spouse',
}, {
    noraml: 'surprise.svg',
    hover: 'surprise_hover.svg',
    name: 'surprise me',
}];

class Index extends React.Component {
    render () {
        const class_name = classNames({
            person: true,
            show: this.props.index === this.props.show,
            frame: true,
        });

        const btn_class = classNames({
            'btn-next': true,
            disabled: this.props.ifDisabled,
        });

        return (
            <div className={class_name}>
                <div className='wrapper'>
                    <div className='title'>
                        <span>Who are you shopping for?</span>
                    </div>
                    <List
                        onClick={this.props.onPersonClick.bind(this)}
                        choice={this.props.choice}
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
    const listItems = pictures.map((picture, index) =>
        <li
            key={`list_${index}`}
            onClick={props.onClick.bind(this, index)}
            className={index === props.choice ? 'active' : 'inactive'}
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

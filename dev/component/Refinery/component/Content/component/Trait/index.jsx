import React from 'react';
import classNames from 'classNames';

import database from '../../database.jsx';

class Index extends React.Component {
    constructor() {
        super();
        this.state = {
            number: 3,
        };
    }
    render () {
        const class_name = classNames({
            trait: true,
            show: this.props.index === this.props.show,
            frame: true,
        });

        const ifDisabled = this.props.ifDisabledArray[this.props.index];

        const btn_class = classNames({
            'btn-next': true,
            disabled: ifDisabled,
        });

        let name;
        if (this.props.person_choice !== -1) {
            name = database.pictures[this.props.person_choice].name;
        } else {
            name = '';
        }

        const plural_class = classNames({
            show: this.state.number !== 1,
        });

        return (
            <div className={class_name}>
                <div className='wrapper'>
                    <div className='title'>
                        <span>What is your </span>
                        <span className='name'>
                            {name}
                        </span>
                        <span> like?</span>
                    </div>
                    <div className='title'>
                        <span>Choose </span>
                        <span className='number'>
                            {this.state.number}
                        </span>
                        <span> trait</span>
                        <span className={plural_class}>s</span>
                        <span>.</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;

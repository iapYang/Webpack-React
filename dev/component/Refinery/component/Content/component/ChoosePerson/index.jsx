import React from 'react';
import classNames from 'classNames';

class Index extends React.Component {
    render () {
        const class_name = classNames({
            'choose-person': true,
            show: this.props.show,
            frame: true,
        });

        console.log('2333fffffff');

        return (
            <div className={class_name}>
                <div className='choose-person-wrapper'></div>
            </div>
        );
    }
}

export default Index;

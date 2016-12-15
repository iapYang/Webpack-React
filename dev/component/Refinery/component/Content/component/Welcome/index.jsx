import React from 'react';
import classNames from 'classNames';

class Index extends React.Component {
    render () {
        const class_name = classNames({welcome: true,
            show: this.props.show});

        console.log(this.props.show);

        return (
            <div className={class_name}>
                <div className='logo'>
                    <img src='./images/logo.png' />
                </div>
                <div className='title'>
                    <img src='./images/entrance.gif' />
                </div>
                <div className='desc'>
                    <span>
                        THE PERFECT PRESENT IS RIGHT THIS WAY
                    </span>
                </div>
                <div className='btn-start' onClick={this.props.onClick.bind(this)}>
                    <span className='text'>begin</span>
                    <span className='symbol'>l</span>
                </div>
                <div className='check-out'>
                    <a
                        href='http://www.refinery29.com/best-gifts'
                        target='_blank'
                        >
                        OR GO STRAIGHT TO GIFT GUIDES
                    </a>
                </div>
            </div>
        );
    }
}

export default Index;

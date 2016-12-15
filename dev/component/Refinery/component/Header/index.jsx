import React from 'react';

class Index extends React.Component {
    render () {
        return (
            <div className='refinery-header'>
                <div className='refinery-header-wrapper'>
                    <a
                        href='http://www.refinery29.com'
                        target='_blank'>
                        <div className='logo'>
                            <img src='./images/logo.svg' />
                        </div>
                    </a>

                    <div className='social-wrapper'>
                        <div className='facebook share'>f</div>
                        <div className='twitter share'>t</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;

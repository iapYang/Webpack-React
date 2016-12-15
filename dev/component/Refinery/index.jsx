import React from 'react';
import Header from './component/Header';
import Content from './component/Content';

class Refinery extends React.Component {
    render () {
        return (
            <div className='refinery-wrapper'>
                <Header />
                <Content />
            </div>
        );
    }
}

export default Refinery;

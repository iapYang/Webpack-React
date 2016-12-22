import React from 'react';
import IScroll from 'iscroll';

class Index extends React.Component {
    componentDidMount() {
        const myScroll = new IScroll(this.showcase, {
            mouseWheel: true,
            scrollbars: true,
        });
    }
    render() {
        console.log(this.props.filtered);

        return (
            <div
                className='showcase'
                ref={showcase => {
                    this.showcase = showcase;
                }}
                >
                <div className='content-wrapper'>
                    <div className='title'>
                        <img src='./images/picks.png' />
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;

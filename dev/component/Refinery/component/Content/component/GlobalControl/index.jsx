import React from 'react';
import classNames from 'classNames';

class Index extends React.Component {
    handlePersonClick() {
        this.props.onPersonClick.call(this);
    }
    handleTraitClick() {
        this.props.onTraitClick.call(this);
    }
    render () {
        return (
            <div className='globalControl'>
                <div className='content-wrapper'>
                    <div
                        className='choose choose-person'
                        onClick={this.handlePersonClick.bind(this)}
                        >
                        <span className='text'>person</span>
                        <span className='symbol show-desktop'>y</span>
                    </div>
                    <div
                        className='choose choose-trait'
                        onClick={this.handleTraitClick.bind(this)}
                        >
                        <span className='text'>
                            {this.props.flagTrait ? 'traits' : 'personalities'}
                        </span>
                        <span className='symbol show-desktop'>y</span>
                    </div>
                    <div className='divide-line'></div>
                </div>
            </div>
        );
    }
}

export default Index;

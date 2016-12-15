import React from 'react';
import Welcome from './component/Welcome';

class Index extends React.Component {
    constructor() {
        super();
        this.state = {
            'welcome-show': true,
        };
    }
    handleWelcomeClick() {
        this.setState({
            'welcome-show': false,
        });
    }
    render () {
        return (
            <div className='refinery-content'>
                <Welcome
                    onClick={this.handleWelcomeClick.bind(this)} show={this.state['welcome-show']}
                    />
            </div>
        );
    }
}

export default Index;

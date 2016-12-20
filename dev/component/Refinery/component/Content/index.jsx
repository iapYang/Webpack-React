import React from 'react';
import Welcome from './component/Welcome';
import Person from './Component/Person';

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
                <Person
                    show={true}
                    />
            </div>
        );
    }
}

export default Index;

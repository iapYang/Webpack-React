import React from 'react';
import Welcome from './component/Welcome';
import ChoosePerson from './Component/ChoosePerson';

class Index extends React.Component {
    constructor() {
        super();
        this.state = {
            'welcome-show': true,
            'person-show': false,
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
                <ChoosePerson
                    show={this.state['person-show']}
                    />
            </div>
        );
    }
}

export default Index;

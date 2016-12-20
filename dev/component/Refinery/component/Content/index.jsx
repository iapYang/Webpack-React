import React from 'react';
import Welcome from './component/Welcome';
import Person from './component/Person';

class Index extends React.Component {
    constructor() {
        super();
        this.state = {
            show: 0,
            'person-choice': -1,
            'person-next-disabled': true,
        };
    }
    handleNextClick(i) {
        this.setState({
            show: i + 1,
        });
    }
    handlePersonClick(i) {
        this.setState({
            'person-choice': i,
            'person-next-disabled': false,
        });
    }
    render () {
        return (
            <div className='refinery-content'>
                <Welcome
                    index={0}
                    onNextClick={this.handleNextClick.bind(this)}
                    show={this.state.show}
                    />
                <Person
                    index={1}
                    onNextClick={this.handleNextClick.bind(this)}
                    onPersonClick={this.handlePersonClick.bind(this)}
                    show={this.state.show}
                    choice={this.state['person-choice']}
                    ifDisabled={this.state['person-next-disabled']}
                    />
            </div>
        );
    }
}

export default Index;

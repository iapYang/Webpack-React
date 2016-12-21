import React from 'react';
import update from 'immutability-helper';

import database from './database.jsx';

import Welcome from './component/Welcome';
import Person from './component/Person';
import Trait from './component/Trait';

class Index extends React.Component {
    constructor() {
        super();
        this.state = {
            show: 0,
            'person-choice': -1,
            'next-disabled': [false, true, true],
        };
    }
    handleNextClick(i) {
        if (this.state['next-disabled'][i]) return;

        this.setState({
            show: i + 1,
        });
    }
    handlePersonClick(i) {
        this.setState(prevState => {
            const new_state = update(prevState['next-disabled'], {
                [1]: {
                    $set: false,
                },
            });

            return {
                'person-choice': i,
                'next-disabled': new_state,
            };
        });
    }
    chooseRenderDom() {
        switch (this.state.show) {
            case 0:
                return (
                    <Welcome
                        index={this.state.show}
                        onNextClick={this.handleNextClick.bind(this)}
                        show={this.state.show}
                        ifDisabledArray={this.state['next-disabled']}/>
                );
            case 1:
                return (
                    <Person
                        index={this.state.show}
                        onNextClick={this.handleNextClick.bind(this)}
                        onPersonClick={this.handlePersonClick.bind(this)}
                        show={this.state.show}
                        person_choice={this.state['person-choice']}
                        ifDisabledArray={this.state['next-disabled']}
                        pictures={database.pictures}
                        />
                );
            case 2:
                return (
                    <Trait
                        index={this.state.show}
                        onNextClick={this.handleNextClick.bind(this)}
                        show={this.state.show}
                        ifDisabledArray={this.state['next-disabled']}
                        person_choice={this.state['person-choice']}
                        />
                );
            default:
                return (
                    <div>
                        Sorry!
                    </div>
                );
        }
    }
    render () {
        const render_dom = this.chooseRenderDom.call(this);

        return (
            <div className='refinery-content'>
                {render_dom}
            </div>
        );
    }
}

export default Index;

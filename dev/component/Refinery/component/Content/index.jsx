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
            current_show: 0,
        };
    }
    handleBackClick(i) {
        this.setState(prevState => ({
            current_show: prevState.current_show - 1,
        }));
    }
    handleNextClick(i, property) {
        const property_names = ['welcome', 'person', 'trait'];

        const obj = {};
        obj[property_names[i]] = property;
        obj.current_show = i + 1;

        this.setState(obj);
    }
    chooseRenderDom() {
        switch (this.state.current_show) {
            case 0:
                return (
                    <Welcome
                        index={this.state.current_show}
                        onNextClick={this.handleNextClick.bind(this)}
                        />
                );
            case 1:
                return (
                    <Person
                        index={this.state.current_show}
                        onNextClick={this.handleNextClick.bind(this)}
                        />
                );
            case 2:
                return (
                    <Trait
                        index={this.state.current_show}
                        onNextClick={this.handleNextClick.bind(this)}
                        person_choice={this.state.person.choice}
                        onBackClick={this.handleBackClick.bind(this)}
                        />
                );
            default:
                return (
                    <div className='sorry'>
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

import React from 'react';
import update from 'immutability-helper';

import database from './database.jsx';
import fetchData from './fetchData.js';

import Welcome from './component/Welcome';
import Person from './component/Person';
import Trait from './component/Trait';

let rawData = {};

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
    handleFilter() {
        const personName = database.pictures[this.state.person.choice].gsx$person;
        const filtered = [];
        this.state.trait.traits.forEach(item => {
            if (item.selected) {
                console.log(rawData[personName]);
                filtered.push(rawData[personName][item.gsx$trait]);
            }
        });

        console.log(filtered);
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

        if (this.state.current_show === 3) {
            if (fetchData.isEmpty(rawData)) {
                fetchData.handleFetchData(result => {
                    rawData = result;
                    this.handleFilter.call(this);
                });
            } else {
                this.handleFilter.call(this);
            }
        }

        return (
            <div className='refinery-content'>
                {render_dom}
            </div>
        );
    }
}

export default Index;

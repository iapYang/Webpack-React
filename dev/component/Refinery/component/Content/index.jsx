import React from 'react';
import update from 'immutability-helper';

import database from './module/database.js';
import fetchData from './module/fetchData.js';

import Welcome from './component/Welcome';
import Person from './component/Person';
import Trait from './component/Trait';
import Showcase from './component/Showcase';

let rawData = {};

class Index extends React.Component {
    constructor() {
        super();
        this.state = {
            current_show: 0,
            filtered: [],
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
        obj.current_show = i + 1 === 3 ? 555 : i + 1;

        if (obj.current_show === 555) {
            this.handleFetch.call(this);
        }

        this.setState(obj);
    }
    handleFetch() {
        console.log('handleFetch');

        if (fetchData.isEmpty(rawData)) {
            fetchData.handleFetchData(result => {
                console.log('handleFetch empty');
                rawData = result;
                this.handleFilter.call(this);
            });
        } else {
            console.log('handleFetch full');
            this.handleFilter.call(this);
        }
    }
    handleFilter() {
        console.log('handleFilter');

        const personName = database.pictures[this.state.person.choice].gsx$person;
        const filtered = [];
        this.state.trait.traits.forEach(item => {
            if (item.selected) {
                filtered.push(rawData[personName][item.gsx$trait]);
            }
        });

        this.setState({
            filtered,
            current_show: 3,
        });
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
            case 3:
                return (
                    <Showcase
                        index={this.state.current_show}
                        onNextClick={this.handleNextClick.bind(this)}
                        person_choice={this.state.person.choice}
                        onBackClick={this.handleBackClick.bind(this)}
                        filtered={this.state.filtered}
                        />
                );
            default:
                return (
                    <div className='loading-container frame'>
                        <div className='title'>
                            <span>the search is on...</span>
                        </div>
                        <div className='wrapper'>
                            <img src='./images/loading.gif'/>
                        </div>
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

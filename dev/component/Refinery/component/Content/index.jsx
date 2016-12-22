import React from 'react';
import update from 'immutability-helper';

import database from './module/database.js';
import util from './module/util.js';

import Welcome from './component/Welcome';
import Person from './component/Person';
import Trait from './component/Trait';
import Showcase from './component/Showcase';
import GlobalControl from './component/GlobalControl';

let rawData = {};

class Index extends React.Component {
    constructor() {
        super();
        this.state = {
            current_show: 0,
            filtered: [],
            global_show: false,
        };
    }
    handleBackClick(i) {
        this.setState(prevState => ({
            current_show: prevState.current_show - 1,
        }));
    }
    handleNextClick(i, property) {
        switch (i) {
            case 0:
                this.setState({
                    welcome: property,
                    current_show: i + 1,
                });
                break;
            case 1:
                if (property.choice === 5) {
                    const tmp_traits = util.shuffle(database.traits);

                    for (let i = 0; i < 3; i++) {
                        tmp_traits[i].selected = true;
                    }

                    this.setState({
                        person: {
                            choice: util.shuffle([0, 1, 2, 3, 4])[0],
                            'next-disabled': true,
                        },
                        trait: {
                            number: 0,
                            traits: tmp_traits,
                        },
                        current_show: 555,
                    });

                    this.handleFetch.call(this);
                } else {
                    this.setState({
                        person: property,
                        current_show: i + 1,
                    });
                }
                break;
            case 2:
                this.handleFetch.call(this);

                this.setState({
                    trait: property,
                    current_show: 555,
                });
                break;
            default:
                break;
        }
    }
    handleFetch() {
        console.log('handleFetch');

        if (util.isEmpty(rawData)) {
            util.fetchData(result => {
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
        console.log(personName);
        let filtered = [];
        this.state.trait.traits.forEach(item => {
            if (item.selected) {
                console.log(item.gsx$trait);
                filtered = [...filtered, ...rawData[personName][item.gsx$trait]];
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
                {this.state.global_show ? <GlobalControl /> : ''}
            </div>
        );
    }
}

export default Index;

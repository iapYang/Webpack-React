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

const current_show_index = {
    welcome: 0,
    person: 1,
    trait: 2,
    showcase: 3,
};

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
            case current_show_index.welcome:
                this.setState({
                    welcome: property,
                    current_show: i + 1,
                });
                break;
            case current_show_index.person:
                if (property.choice === 5) {
                    const tmp_traits = [];

                    database.traits.forEach(item => {
                        tmp_traits.push({
                            name: item.name,
                            selected: item.selected,
                            gsx$trait: item.gsx$trait,
                        });
                    });

                    const tmp_array = util.shuffle(util.initArray(tmp_traits.length));

                    for (let i = 0; i < 3; i++) {
                        tmp_traits[tmp_array[i]].selected = true;
                    }

                    this.setState({
                        person: {
                            choice: util.shuffle(util
                                .initArray(database.pictures.length - 1))[0],
                            'next-disabled': false,
                        },
                        trait: {
                            number: 0,
                            traits: tmp_traits,
                        },
                        current_show: 555,
                    }, () => {
                        this.handleFetch.call(this);
                    });
                } else {
                    if (util.isEmpty(this.state.trait)) {
                        this.setState({
                            person: property,
                            current_show: i + 1,
                        });
                    } else {
                        this.setState({
                            person: property,
                            current_show: current_show_index.showcase,
                        }, () => {
                            this.handleFetch.call(this);
                        });
                    }
                }
                break;
            case current_show_index.trait:
                this.setState({
                    trait: property,
                    current_show: 555,
                }, () => {
                    console.log('trait');
                    this.handleFetch.call(this);
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
                rawData = result;
                this.handleFilter.call(this);
            });
        } else {
            this.handleFilter.call(this);
        }
    }
    handleFilter() {
        console.log('handleFilter', this.state.person.choice);

        const personName = database.pictures[this.state.person.choice].gsx$person;
        let filtered = [];
        this.state.trait.traits.forEach(item => {
            if (item.selected) {
                filtered = [...filtered, ...rawData[personName][item.gsx$trait]];
            }
        });

        this.setState({
            filtered,
            current_show: current_show_index.showcase,
            global_show: true,
        });
    }
    handlePlayAgainClick() {
        this.setState({
            person: {},
            trait: {},
            current_show: current_show_index.person,
            global_show: false,
        });
    }
    handlePersonClick() {
        this.setState(prevState => {
            if (prevState.current_show === current_show_index.person) {
                return {
                    current_show: current_show_index.showcase,
                };
            }

            return {
                current_show: current_show_index.person,
            };
        });
    }
    handleTraitClick() {
        this.setState(prevState => {
            if (prevState.current_show === current_show_index.trait) {
                return {
                    current_show: current_show_index.showcase,
                };
            }

            return {
                current_show: current_show_index.trait,
            };
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
                        status={this.state.person ? this.state.person : {}}
                        onNextClick={this.handleNextClick.bind(this)}
                        />
                );
            case 2:
                return (
                    <Trait
                        index={this.state.current_show}
                        onNextClick={this.handleNextClick.bind(this)}
                        person_choice={this.state.person.choice}
                        status={this.state.trait ? this.state.trait : {}}
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
                        onPlayAgainClick={this.handlePlayAgainClick.bind(this)}
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
                            <img src='./image/loading.gif'/>
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
                {this.state.global_show ?
                    <GlobalControl
                    flagTrait={this.state.current_show === current_show_index.showcase}
                    onPersonClick={this.handlePersonClick.bind(this)}
                    onTraitClick={this.handleTraitClick.bind(this)}
                    /> : ''}
            </div>
        );
    }
}

export default Index;

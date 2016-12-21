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
    handleFetchData() {
        const url = 'https://cdn.contentful.com/spaces/gju6m3ezaxar/entries?content_type=jsonFull&include=10&limit=200&access_token=e887c7cd3298dd5e14cce7cd22523670abea9de380aef548efcbcb4b3a612ee9';

        fetch(url, {
            method: 'GET',
            mode: 'cors',
            cache: 'default',
        })
            .then(response =>
                response.json()
            )
            .then(json => {
                console.log(json.items[0].fields.jsonFull.feed.entry);
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
            this.handleFetchData.call(this);
        }

        return (
            <div className='refinery-content'>
                {render_dom}
            </div>
        );
    }
}

export default Index;

import React from 'react';
import classNames from 'classNames';
import update from 'immutability-helper';

import database from '../../database.jsx';

class Index extends React.Component {
    constructor() {
        super();
        this.state = {
            number: 3,
            traits: [{
                name: 'chill',
                selected: false,
                gsx$trait: 'Chill',
            }, {
                name: 'chic aesthete',
                selected: false,
                gsx$trait: 'Chic Aesthete',
            }, {
                name: 'emo',
                selected: false,
                gsx$trait: 'Emo',
            }, {
                name: 'type a',
                selected: false,
                gsx$trait: 'Type A',
            }, {
                name: 'early adopter',
                selected: false,
                gsx$trait: 'Early Adopter',
            }, {
                name: 'fancy',
                selected: false,
                gsx$trait: 'Fancy',
            }],
        };
    }
    handleClick(i) {
        this.setState(prevState => {
            const prevSelected = prevState.traits[i].selected;

            if (this.state.number <= 0 && !prevSelected) return;

            const new_trait = update(prevState.traits, {
                [i]: {
                    selected: {
                        $set: !prevSelected,
                    },
                },
            });

            return {
                number: prevSelected ? prevState.number + 1 : prevState.number - 1,
                traits: new_trait,
            };
        });
    }
    handleNextClick(i) {
        if (this.state.number !== 0) return;

        this.props.onNextClick.call(this, this.props.index, this.state);
    }
    render () {
        const btn_class = classNames({
            'btn-next': true,
            disabled: this.state.number !== 0,
        });

        let name;
        if (this.props.person_choice !== -1) {
            name = database.pictures[this.props.person_choice].name;
        } else {
            name = '';
        }

        const plural = this.state.number === 1 ? '' : 's';

        return (
            <div className='trait frame'>
                <div
                    onClick={this.props.onBackClick.bind(this, this.props.index)}
                    className='back-container'
                    >
                    <span className='arrow'>r</span>
                    <span className='back'>back</span>
                </div>
                <div className='wrapper'>
                    <div className='title'>
                        <span>What is your </span>
                        <span className='name'>
                            {name}
                        </span>
                        <span> like?</span>
                    </div>
                    <div className='title'>
                        <span>Choose </span>
                        <span className='number'>
                            {this.state.number}
                        </span>
                        <span> trait</span>
                        <span>{plural}</span>
                        <span>.</span>
                    </div>
                    <List
                        onClick={this.handleClick.bind(this)}
                        traits={this.state.traits}
                        />
                    <div
                        className={btn_class}
                        onClick={this.handleNextClick.bind(this)}
                        >
                        <span className='text'>see gifts</span>
                        <span className='symbol'>l</span>
                    </div>
                </div>
            </div>
        );
    }
}

function List(props) {
    const listItems = props.traits.map((trait, index) =>
        <li
            key={`list_${index}`}
            onClick={props.onClick.bind(this, index)}
            className={trait.selected ? 'active' : 'inactive'}
            >
            <div className='circle-container'>
                <div className='circle'></div>
                <img className='circle-hover' src='./images/circle_hover.png'/>
            </div>
            <div className='name'>
                <span>{trait.name}</span>
            </div>
        </li>
    );

    return (
        <ul className='trait-list'>
            {listItems}
        </ul>
    );
}

export default Index;

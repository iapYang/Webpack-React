import React from 'react';
import classNames from 'classNames';

const buttons = [
    {
        name: 'All',
        condition: 'ABC',
    }, {
        name: 'A',
        condition: 'A',
    }, {
        name: 'B',
        condition: 'B',
    }, {
        name: 'C',
        condition: 'C',
    }, {
        name: 'A+B',
        condition: 'AB',
    }, {
        name: 'B+C',
        condition: 'BC',
    }, {
        name: 'A+C',
        condition: 'AC',
    }];

const colors = ['red', 'green', 'blue'];

const base = [];

for (let i = 0; i < 7; i++) {
    base.push({
        type: 0,
        number: i + 1,
    });
}

for (let i = 0; i < 9; i++) {
    base.push({
        type: 1,
        number: i + 1,
    });
}

for (let i = 0; i < 11; i++) {
    base.push({
        type: 2,
        number: i + 1,
    });
}

class Filter extends React.Component {
    constructor() {
        super();
        this.state = {
            condition: 'ABC',
        };
    }
    shuffle(array) {
        let currentIndex = array.length,
            temporaryValue,
            randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
    handleClick(index) {
        this.setState({
            condition: buttons[index].condition,
        });
    }
    handleFilter() {
        const type = ['A', 'B', 'C'];
        const filtered = base.filter((item, index) =>
            this.state.condition.includes(type[item.type])
        );

        return this.shuffle(filtered);
    }
    render () {
        const filtered = this.handleFilter.call(this);

        return (
            <div className='filter-wrapper'>
                <Button
                    buttons={buttons}
                    onClick={this.handleClick.bind(this)} />
                <FilterImg filtered={filtered} />
            </div>
        );
    }
}

function Button(props) {
    const listItems = props.buttons.map((data, index) =>
        <div
            key={`btn${index}`}
            className='btn'
            onClick={props.onClick.bind(this, index)}>
            <span>{data.name}</span>
        </div>
    );

    return (
        <div className='btn-container'>
            {listItems}
        </div>
    );
}

function FilterImg(props) {
    const listItems = props.filtered.map((data, index) => {
        const class_name = classNames('list-item', colors[data.type]);

        return (
            <div key={`list_${index}`} className={class_name}>
                <span>{data.number}</span>
            </div>
        );
    });

    return (
        <div className='list-wrapper'>
            {listItems}
        </div>
    );
}

export default Filter;

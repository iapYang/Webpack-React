import React from 'react';

class Plus extends React.Component {
    constructor() {
        super();
        this.state = {
            goods: [{
                category: 'Web Development',
                prize: '300.00',
                selected: true,
            }, {
                category: 'Design',
                prize: '400.00',
                selected: false,
            }, {
                category: 'Integration',
                prize: '250.00',
                selected: false,
            }, {
                category: 'Training',
                prize: '220.00',
                selected: false,
            }],
        };
    }
    handleClick(index) {
        this.setState(prevState => {
            prevState.goods[index].selected = !prevState.goods[index].selected;
        });
    }
    sum() {
        let total = 0;
        this.state.goods.forEach((item, index) => {
            if (item.selected) {
                total += Number(item.prize);
            }
        });

        return total.toFixed(2);
    }
    render () {
        const sum = this.sum.call(this);

        return (
            <div className='plus-wrapper'>
                <div className='plus-header'>
                    <span>Services</span>
                </div>
                <div className='plus-content'>
                    <List
                        onClick={this.handleClick.bind(this)}
                        goods={this.state.goods}
                        total={sum} />
                </div>
            </div>
        );
    }
}

function List(props) {
    const listItems = props.goods.map((data, index) =>
        <li className={props.goods[index].selected ? 'active' : ''}
            onClick={props.onClick.bind(this, index)}
            key={`nav_${index}`} >
            <div className='li-wrapper'>
                <span className='category'>
                    {data.category}
                </span>
                <span className='prize'>
                    {`$${data.prize}`}
                </span>
            </div>
        </li>
    );

    return (
        <ul>
            {listItems}

            <div className='line'></div>

            <li className='total'>
                <div className='li-wrapper'>
                    <span className='category'>
                        Total
                    </span>
                    <span className='prize'>
                        {`$${props.total}`}
                    </span>
                </div>
            </li>
        </ul>
    );
}

export default Plus;

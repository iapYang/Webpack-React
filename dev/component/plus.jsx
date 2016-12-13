import React from 'react';

const data_list = [{
    category: 'Web Development',
    prize: '300.00',
}, {
    category: 'Design',
    prize: '400.00',
}, {
    category: 'Integration',
    prize: '250.00',
}, {
    category: 'Training',
    prize: '220.00',
}];

class Plus extends React.Component {
    render () {
        return (
            <div className="plus-wrapper">
                <div className="plus-header">
                    <span>Services</span>
                </div>
                <div className="plus-content">
                    <List />
                </div>
            </div>
        );
    }
}

function List(props) {
    const listItems = data_list.map((data, index) =>
        <li
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
        </ul>
    );
}

export default Plus;

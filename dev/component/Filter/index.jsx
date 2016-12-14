import React from 'react';

const button_name = ['All', 'A', 'B', 'C', 'A+B', 'B+C', 'A+C'];

class Filter extends React.Component {
    render () {
        return (
            <div className='filter-wrapper'>
                <Button buttons={button_name} />
            </div>
        );
    }
}

function Button(props) {
    const listItems = props.buttons.map((data, index) =>
        <div
            key={`btn${index}`}
            className='btn'></div>
    );

    return (
        <div className='btn-wrapper'>
            {listItems}
        </div>
    );
}

export default Filter;

import React from 'react';

const data_list = [{
    src: './image/css-variables-100x100.jpg',
    title: 'What You Need To Know About CSS Variables',
    href: 'http://tutorialzine.com/2016/03/what-you-need-to-know-about-css-variables/',
}, {
    src: './image/great-looking-pricing-tables-100x100.jpg',
    title: 'Freebie: 4 Great Looking Pricing Tables',
    href: 'http://tutorialzine.com/2016/02/freebie-4-great-looking-pricing-tables/',
}, {
    src: './image/interesting-resources-february-100x100.jpg',
    title: '20 Interesting JavaScript and CSS Libraries for February 2016',
    href: 'http://tutorialzine.com/2016/02/20-interesting-javascript-and-css-libraries-for-february-2016/',
}, {
    src: './image/quick-tip-responsive-headers-100x100.png',
    title: 'Quick Tip: The Easiest Way To Make Responsive Headers',
    href: 'http://tutorialzine.com/2016/02/quick-tip-easiest-way-to-make-responsive-headers/',
}, {
    src: './image/learn-sql-20-minutes-100x100.png',
    title: 'Learn SQL In 20 Minutes',
    href: 'http://tutorialzine.com/2016/01/learn-sql-in-20-minutes/',
}, {
    src: './image/creating-your-first-desktop-app-with-electron-100x100.png',
    title: 'Creating Your First Desktop App With HTML, JS and Electron',
    href: 'http://tutorialzine.com/2015/12/creating-your-first-desktop-app-with-html-js-and-electron/',
}];

class Query extends React.Component {
    constructor() {
        super();
        this.state = {
            filtered: data_list,
            value: '',
        };
    }
    handleChange(event) {
        this.setState({
            value: event.target.value,
        });

        this.handleFilter.call(this, event.target.value);
    }
    handleFilter(input) {
        const filtered = data_list.filter(item => {
            const lowerCase_data = item.title.toLowerCase();
            const lowerCase_input = input.toLowerCase();

            return lowerCase_data.match(lowerCase_input) !== null;
        });

        this.setState({
            filtered,
        });
    }
    render () {
        return (
            <div className='query-wrapper'>
                <div className='query-header'>
                    <input
                        value={this.state.value}
                        onChange={this.handleChange.bind(this)}
                        placeholder='Enter your search terms'/>
                </div>
                <div className='query-body'>
                    <List filtered={this.state.filtered} />
                </div>
            </div>
        );
    }
}

function List(props) {
    const listItems = props.filtered.map((data, index) =>
        <li key={`list_${index}`} >
            <a href={data.href} className='li-left' target='_blank'>
                <img src={data.src}/>
            </a>
            <span className='li-right'>
                {data.title}
            </span>
        </li>
    );

    return (
        <ul>
            {listItems}
        </ul>
    );
}

export default Query;

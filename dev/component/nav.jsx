import React from 'react';

const names = ['HOME', 'PROJECTS', 'SERVICES', 'CONTACT'];

class Nav extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            nav_index : 0,
        };
    }
    handleClick(i) {
        this.setState({
            nav_index : i,
        });
    }
    render () {
        return (
            <div className="nav-wrapper">
                <div className="nav-header">
                    <NameList
                        names={names}
                        index={this.state.nav_index}
                        onClick={i => this.handleClick(i)}/>
                </div>
                <Details index={this.state.nav_index} />
            </div>
        );
    }
}

function NameList(props) {
    const names = props.names;
    const chosen = props.index;
    const listItems = names.map((name, index) =>
        <li
            key={`nav_${index}`}
            className={chosen === index ? 'active' : ''}
            onClick={() => props.onClick(index)}>
            <span>
                {name}
            </span>
        </li>
    );

    return (
        <ul>
            {listItems}
        </ul>
    );
}

function Details(props) {
    const name = names[props.index];

    return (
        <div className="nav-body">
            <div className="nav-body-wrapper">
                <span>You chose </span>
                <span className="nav-name">{name}</span>
            </div>
        </div>
    );
}

export default Nav;

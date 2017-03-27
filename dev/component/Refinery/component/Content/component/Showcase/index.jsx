import React from 'react';
import IScroll from 'iscroll';

class Index extends React.Component {
    componentDidMount() {
        const scroll = new IScroll(this.showcase, {
            mouseWheel: true,
            scrollbars: true,
            fadeScrollbars: true,
            click: true,
            probeType: 3,
        });

        scroll.on('scrollStart', () => {
            scroll.refresh();
        });
    }
    render() {
        return (
            <div
                className='showcase'
                ref={showcase => {
                    this.showcase = showcase;
                }}
                >
                <div className='content-wrapper'>
                    <div className='title'>
                        <img src='./image/picks.png' />
                    </div>
                    <List
                        products={this.props.filtered}
                        />
                    <div className='controller'>
                        <div
                            className='btn btn-again'
                            onClick={this.props.onPlayAgainClick.bind(this)}
                            >play again</div>
                        <div className='btn btn-share'>share</div>
                    </div>
                </div>
            </div>
        );
    }
}

function List(props) {
    const listItems = props.products.map((product, index) =>
        <li
            key={`list_${index}`}
            >
            <a target='_blank' href={product.clickouturl}>
                <div className='left'>
                    <img src={product.image} />
                </div>
                <div className='right'>
                    <span className='name'>{product.itemname}</span>
                    <span className='desc'>{product.describe}</span>
                    <span className='price'>{product.price}</span>
                    <div className='btn-buy'>shop this</div>
                </div>
            </a>
        </li>
    );

    return (
        <ul className='product-list'>
            {listItems}
        </ul>
    );
}

export default Index;

import React from 'react';
import ReactDOM from 'react-dom';

class BettingTile extends React.Component {

    constructor(props) {
        super(props)
        // how wide the button is??? where/how can do i do the styling?
        // the 'buttons/bets' it represents
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onClick(this.props.tiles);
    }

    render() {
        return (
            <button onClick={this.handleClick}>

            </button>
        );
    }

}
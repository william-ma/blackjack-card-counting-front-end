import React from 'react';
import ReactDOM from 'react-dom';

class PlayPage extends React.Component {
    constructor(props) {
        super(props);

        if (props.challenge == null) {
            // API call to get the challenge
        }

        this.state = {
            // store the card...
            // store the index?
            cardValues: "25tfv",
            index: 0
        };

        this.handleClickNext = this.handleClickNext.bind(this);
        this.handleClickPrev = this.handleClickPrev.bind(this);
    }

    componentDidMount() {
        console.log("Showing PlayPage");
    }

    componentWillUnmount() {
        console.log("Not showing PlayPage");
    }

    handleClickNext(e) {
        e.preventDefault();
        const index = this.state.index;
        const cardValues = this.state.cardValues;
        const lastCardIdx = cardValues.length-1;
        if (index == lastCardIdx) {
            this.props.onClick();
        } else if (index < lastCardIdx) {
            this.setState({index: this.state.index+1});
        }
    }

    handleClickPrev(e) {
        e.preventDefault();
        if (this.state.index > 0) {
            this.setState({index: this.state.index-1});
        }
    }

    render() {
        const currentCardValue=this.state.cardValues[this.state.index];
        return (
            <div id="play_page">
                <label>Current card value: {currentCardValue}</label><br/>
                <button onClick={(e) => this.handleClickPrev(e)}>Prev</button>
                <button onClick={(e) => this.handleClickNext(e)}>Next</button>
            </div>
        );
    }
}

export default PlayPage;
import React from 'react';
import ReactDOM from 'react-dom';
import SubmitForm from './SubmitPage.js'

class Pages {
    static Play = new Pages("play");
    static Results = new Pages("results");
    static Submit = new Pages("submit");

    constructor(name) {
        this.name = name;
    }
}

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: Pages.Submit
        };

        this.handleClickSubmit = this.handleClickSubmit.bind(this);
        this.handleClickNewChallenge = this.handleClickNewChallenge.bind(this);
        this.handleClickLastCard = this.handleClickLastCard.bind(this);
    }

    handleClickSubmit(runningCount, trueCount, strategy) {
        console.log("running: " + runningCount);
        console.log("true: " + trueCount);
        console.log("strategy: " + strategy);
        // Make API call...
        // Wait for results...
        // pass the results into Results somehow?
        this.setState({page: Pages.Results});
    }

    handleClickNewChallenge(event) {
        alert('count: ' + event.target.running_count.value);
        event.preventDefault();
        // Make API call...
        // Wait for results...
        // Then display appropiate page?
        this.setState({page: Pages.Play});
    }

    handleClickLastCard(event) {
        alert('count: ' + event.target.running_count.value);
        event.preventDefault();
        // Make API call...
        // Wait for results...
        // Then display appropiate page?
        this.setState({page: Pages.Submit});
    }

    render() {
        let page = <SubmitForm onClick={this.handleClickSubmit} />;
        switch (this.state.page) {
            case Pages.Submit:
                page = <SubmitForm onClick={this.handleClickSubmit} />
                break;
            case Pages.Results:
                console.log("Showing results page");
                break;
            case Pages.Play:
                console.log("Showing play page");
                break;
        }

        return page;
    }

}

export default Game;
import React from 'react';
import ReactDOM from 'react-dom';
import SubmitForm from './SubmitPage.js'
import ResultsPage from './ResultsPage.js'
import PlayPage from './PlayPage.js'

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
            page: Pages.Submit,
            challenge: null
        };

        this.handleClickSubmit = this.handleClickSubmit.bind(this);
        this.handleClickNewChallenge = this.handleClickNewChallenge.bind(this);
        this.handleClickLastCard = this.handleClickLastCard.bind(this);
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    handleClickSubmit(runningCount, trueCount, strategy) {
//        const response = fetch("/api/challenges/submit/" + this.state.challenge.id, {
        const response = fetch("http://localhost:8080/api/challenges/submit/1", {
            method: 'POST',
            body: {
                running_count: runningCount,
                true_count: trueCount,
                strategy: strategy
            }
        });
        console.log(response.body);
        this.setState({
            page: Pages.Results,
            results: true
        });
    }

    handleClickNewChallenge(e) {
        e.preventDefault();
        // API call to get the challenge
        // Pass that challenge
        this.setState({page: Pages.Play});
    }

    handleClickLastCard() {
        this.setState({page: Pages.Submit});
    }

    render() {
        let page;
        switch (this.state.page) {
            case Pages.Submit:
                console.log("Showing SubmitForm");
                page = <SubmitForm onClick={this.handleClickSubmit} />
                break;
            case Pages.Results:
                console.log("Showing ResultsPage");
                page = <ResultsPage value={this.state.results} onClick={this.handleClickNewChallenge} />
                break;
            case Pages.Play:
                console.log("Showing play page");
                page = <PlayPage challenge={this.state.challenge} onClick={this.handleClickLastCard} />
                break;
        }

        return page;
    }

}

export default Game;
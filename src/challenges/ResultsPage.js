import React from 'react';
import ReactDOM from 'react-dom';

class ResultsPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="results_page">
                <h1>
                    {this.props.value}
                </h1>
                <button type="submit" onClick={this.props.onClick}>
                    New Challenge
                </button>
            </div>
        );
    }

}

export default ResultsPage;
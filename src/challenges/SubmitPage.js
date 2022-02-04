import React from 'react';
import ReactDOM from 'react-dom';

class SubmitForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            strategy: 1
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick(event) {
        let runningCount = event.target.running_count.value;
        let trueCount = event.target.true_count.value;
        let strategy = this.state.strategy;
        this.props.onClick(runningCount, trueCount, strategy);
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({strategy: event.target.value});
    }

    render() {
        return (
            <form onSubmit={this.handleClick}>
                <label>
                    Running Count:<br/>
                    <input type="number" name="running_count" />
                    <br/>True Count (optional):<br/>
                    <input type="number" name="true_count" />
                    <br/>
                    <select value={this.state.strategy} onChange={this.handleChange}>
                        <option value="1">Hi-Lo</option>
                        <option value="2">Hi Opt I</option>
                        <option value="3">Hi Opt II</option>
                        <option value="4">KO</option>
                        <option value="5">Omega II</option>
                        <option value="6">Red 7</option>
                        <option value="7">Halves</option>
                        <option value="8">ZenCount</option>
                    </select>
                </label>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default SubmitForm;
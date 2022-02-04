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

    handleClick(e) {
        e.preventDefault();
        let runningCount = e.target.running_count.value;
        let trueCount = e.target.true_count.value;
        let strategy = this.state.strategy;
        this.props.onClick(runningCount, trueCount, strategy);
    }

    handleChange(e) {
        this.setState({strategy: e.target.value});
    }

    render() {
        return (
            <form onSubmit={(e) => this.handleClick(e)}>
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
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default SubmitForm;
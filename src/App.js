import React, { Component } from "react";
import "./App.css";
import Add from "./components/Add";
import Sub from "./components/Sub";
import Reset from "./components/Reset";

class App extends Component {
  constructor() {
    super();
    this.state = {
      number: 0
    };
    this.addToNumber = this.addToNumber.bind(this);
    this.subFromNumber = this.subFromNumber.bind(this);
    this.resetNumber = this.resetNumber.bind(this);
  }

  addToNumber() {
    let newNum = this.state.number;
    this.setState({ number: newNum + 1 });
  }

  subFromNumber() {
    let newNum = this.state.number;
    this.setState({ number: newNum - 1 });
  }

  resetNumber() {
    this.setState({ number: 0 });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Counter Example</h1>
          <div className="number">{this.state.number}</div>
          <div>
            <Sub subFromNumber={this.subFromNumber} />
            <Reset resetNumber={this.resetNumber} />
            <Add addToNumber={this.addToNumber} />
          </div>
        </header>
      </div>
    );
  }
}

export default App;

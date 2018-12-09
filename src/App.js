import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    fromCurrency: "EUR",
    toCurrency: "USD",
    amount: 1,
    result: null
  };

  render() {
    return (
      <div className="App">
        <div className="App">
          <div className="enter_amount">
            <input
              type="text"
              name="amount"
              value={this.state.amount}
              onChange={this.handleInput}
            />
            <select
              name="fromcurrency"
              value={this.state.fromCurrency}
              onChange={this.handleCurrency}
            >
              <option value="USD">US Dollar</option>
              <option value="EUR">Euro</option>
              <option value="JPY">Yen</option>
            </select>
            <select
              name="tocurrency"
              value={this.state.toCurrency}
              onChange={this.handleCurrency}
            >
              <option value="USD">US Dollar</option>
              <option value="EUR">Euro</option>
              <option value="JPY">Yen</option>
            </select>
            <button onClick={this.convertHandler}>Convert</button>
          </div>
          <h3>{this.state.result}</h3>
        </div>
      </div>
    );
  }
}

export default App;

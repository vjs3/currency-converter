import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    fromCurrency: "EUR",
    toCurrency: "USD",
    amount: 1,
    result: null
  };

  handleInput = event => {
    this.setState({ amount: event.target.value });
  };

  handleCurrency = event => {
    if (event.target.name === "fromcurrency") {
      this.setState({ fromCurrency: event.target.value });
    }
    if (event.target.name === "tocurrency") {
      this.setState({ toCurrency: event.target.value });
    }
    // console.log(event.target.value);
  };

  convertHandler = () => {
    if (this.state.fromCurrency !== this.state.toCurrency) {
      axios
        .get(
          `https://api.exchangeratesapi.io/latest?base=${
            this.state.fromCurrency
          }&symbols=${this.state.toCurrency}`
        )
        .then(response => {
          const result =
            this.state.amount * response.data.rates[this.state.toCurrency];
          this.setState({ result: result.toFixed(5) });
        })
        .catch(err => {
          console.log("Opps", err.message);
        });
    } else {
      this.setState({ result: "You cant convert the same currency!" });
    }
  };

  render() {
    return (
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
    );
  }
}

export default App;

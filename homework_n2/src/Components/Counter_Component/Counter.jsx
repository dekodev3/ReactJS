import React, { Component } from "react";
import "./Counter.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleCountChange = this.handleCountChange.bind(this);
  }

  handleIncrement() {
    const { count } = this.state;
    if (count < 0) {
      this.setState({ count: 0 });
    } else {
      this.setState({ count: count + 1 });
    }
  }

  handleDecrement() {
    const { count } = this.state;
    if (count > 0) {
      this.setState({ count: count - 1 });
    } else {
      this.setState({ count: 0 });
    }
  }

  handleReset() {
    this.setState({ count: 0 });
  }

  handleCountChange(event) {
    const count = parseInt(event.target.value, 10);
    if (isNaN(count)) {
      this.setState({ count: 0 });
    } else {
      this.setState({ count });
    }
  }

  render() {
    const { count } = this.state;
    const isEven = count % 2 === 0;
    return (
      <div className="counter-div">
        <p style={{
            color: isEven ? "#2f76c6" : "white",
          }}>{count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        <button onClick={this.handleReset}>Reset</button>
        <br />
        <span
          style={{
            color: isEven ? "#2f76c6" : "white",
          }}
        >
          {isEven ? "Even" : "Odd"}
        </span>
        <input type="number" value={count} onChange={this.handleCountChange} />
      </div>
    );
  }
}

export default Counter;

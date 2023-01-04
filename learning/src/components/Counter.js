import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  incriment() {
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count);
  }

  decriment() {
    this.setState({
      count: this.state.count - 1,
    });
    console.log(this.state.count);
  }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.incriment()}>Incriment</button>
        <button onClick={() => this.decriment()}>Decriment</button>
      </div>
    );
  }
}

export default Counter;

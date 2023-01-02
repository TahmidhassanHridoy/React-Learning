import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <h1>
        Welcome {this.props.name} , Position: {this.props.Position}
      </h1>
    );
  }
}
export default Welcome;

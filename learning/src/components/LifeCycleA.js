import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Tahmid",
    };
    console.log("LifeCycleA Constructoer");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("LifeCycleA componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifeCycleA shouldComponenntUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycleA getSnapsotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LfecycleA ComponentDid Update");
  }

  changeState = () => {
    this.setState({
      name: "Hridoy",
    });
  };

  render() {
    console.log("LifecycleA render");
    return (
      <div>
        <div>LifeCycleA</div>
        <button onClick={this.changeState}>Change State</button>
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;

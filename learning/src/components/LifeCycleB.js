import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Tahmid",
    };
    console.log("LifeCycleB Constructoer");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleB getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("LifeCycleB componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifeCycleB shouldComponenntUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycleB getSnapsotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LfecycleB ComponentDid Update");
  }

  render() {
    console.log("LifecycleB render");
    return <div>LifeCycleB</div>;
  }
}

export default LifeCycleB;

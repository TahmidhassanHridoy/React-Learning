import React, { Component } from "react";

export class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      massage: "hello",
    };

    //this.clickHandler = this.clickHandler.bind(this);
  }

  //   clickHandler() {
  //     this.setState({
  //       massage: "Good bye",
  //     });
  //   }

  clickHandler() {
    this.setState({
      massage: "Good bye",
    });
  }

  render() {
    return (
      <div>
        <div>{this.state.massage}</div>
        {/*<button onClick={this.clickHandler.bind(this)}>click</button>*/}
        {/*<button onClick={() => this.clickHandler()}>click</button>*/}
        <button onClick={this.clickHandler}>click</button>
      </div>
    );
  }
}

export default EventBind;

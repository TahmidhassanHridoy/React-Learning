import React, { Component } from "react";

export class From extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "react",
    };
  }
  HandleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert("${this.state.username},${this.state.comments},${this.state.topic}");
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>From Component</h1>
        <form onClick={this.handleSubmit}>
          <div>
            <label> Username </label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.HandleUsernameChange}
            />
          </div>
          <div>
            <label>Comments </label>
            <textarea
              value={this.state.comments}
              onChange={this.handleCommentsChange}
            ></textarea>
          </div>
          <div>
            <label> Topic </label>
            <select value={this.state.topic} onChange={this.handleTopicChange}>
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default From;
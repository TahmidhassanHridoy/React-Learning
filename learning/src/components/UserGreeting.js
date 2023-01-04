import React, { Component } from "react";

export class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
     return this.state.isLoggedIn && <div>Welcome Tahmid</div>;

    // return this.state.isLoggedIn ? (
    //   <div>Welcome tahmid</div>
    // ) : (
    //   <die>Welcome Guest</die>
    // );

    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Tahhmid</div>;
    // } else {
    //   message = <div> Welcome Guest </div>;
    // }
    // return <div>{message}</div>;

    // if (this.state.isLoggedIn) {
    //   return <div>Welcome tahmid</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }
    // return (
    //   <div>
    //     <div>Welcome tahmid</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // );
  }
}

export default UserGreeting;

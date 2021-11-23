import React from "react";

export default class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "user01",
    };
  }

  getUsername() {
    return this.state.username;
  }

  render() {
    return <h1>{this.getUsername()}</h1>
  }
}

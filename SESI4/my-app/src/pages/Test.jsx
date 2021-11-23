import React from "react";
import Counter from "../components/Counter";
import HeroName from "../components/HeroName";
import Users from "../components/Users";

export default class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Hercules with state",
    };
  }
  render() {
    return (
      <>
        <div>
          <Users></Users>
        </div>
        <div>
          <Counter></Counter>
        </div>
        <div>
          <HeroName name={this.state.name}></HeroName>
        </div>
        <div>
          <HeroName name='Hercules with string'></HeroName>
        </div>
      </>
    );
  }
}

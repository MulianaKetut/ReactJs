import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <>
        <div>
          <h1>Class Realtime CLOCK</h1>
          <hr />
          <h1>{this.state.date.toLocaleTimeString()}</h1>
        </div>
      </>
    );
  }
}

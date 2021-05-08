import React, { Component } from "react";
class ClockClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount = () => {
    this.setTime = setInterval(() => {
      this.setState((state) => ({ date: new Date() }));
    }, 1000);
  };
  shouldComponentUpdate = (nextProps, nextState) => {
    return nextState !== this.state;
  };
  componentWillUnmount = () => {
    return clearInterval(this.setTime);
  };

  render() {
    return (
      <div className="clock__container">
        <b>Bây giờ là:</b>
        <p>{this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default ClockClassComponent;

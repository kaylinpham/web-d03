import React, { Component } from "react";
class CountdownClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date(), seconds: 0 };
  }
  componentDidMount = () => {
    const time = this.state.time.toLocaleTimeString().split(":");
    const seconds =
      Number(time[0]) * 3600 + Number(time[1]) * 60 + parseInt(time[2], 10);
    this.setState((state) => ({ seconds: seconds }));
    this.setTime = setInterval(() => {
      this.setState((state) => ({ seconds: state.seconds - 1 }));
    }, 1000);
  };
  shouldComponentUpdate = (nextProps, nextState) => {
    return nextState !== this.state;
  };
  componentDidUpdate = () => {
    if (this.state.seconds === 0) {
      return clearInterval(this.setTime);
    }
  };
  componentWillUnmount = () => {
    return clearInterval(this.setTime);
  };
  render() {
    // console.log("Countdown");
    const seconds = this.state.seconds;
    const hour = Math.floor(seconds / 3600);
    let minute = Math.floor((seconds - hour * 3600) / 60);
    let second = seconds % 60;

    minute = minute < 10 ? `0${minute}` : minute;
    second = second < 10 ? `0${second}` : second;
    return (
      <div className="clock__container">
        <b>Countdown : </b>
        <p>
          {hour}:{minute}:{second}
        </p>
      </div>
    );
  }
}

export default CountdownClassComponent;

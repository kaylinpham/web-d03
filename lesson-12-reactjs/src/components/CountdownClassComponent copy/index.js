import React, { Component } from "react";
class CountdownClassComponent extends Component {
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
const CountdownFunctionalComponent = React.memo(
  function CountdownFunctionalComponent(props) {
    const [time, setTime] = useState(new Date());
    const [seconds, setSeconds] = useState(0);
    const [timeOn, setTimeOn] = useState(false);

    useEffect(() => {
      const newTime = time.toLocaleTimeString().split(":");

      const newSeconds =
        Number(newTime[0]) * 3600 +
        Number(newTime[1]) * 60 +
        parseInt(newTime[2], 10);

      setSeconds((state) => ({ seconds: newSeconds }));

      const countDown = setInterval(() => {
        setSeconds((state) => ({ seconds: state.seconds - 1 }));
      }, 1000);

      return () => {
        clearInterval(countDown);
      };
    }, [seconds]);

    return (
      <div className="clock__container">
        <b>Countdown : </b>
        <p>
          {hour}:{minute}:{second}
        </p>
      </div>
    );
  }
);

export default CountdownFunctionalComponent;

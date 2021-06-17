import React, { Component } from "react";

import "./style.css";

class CountClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    return nextState !== this.state;
  };
  handleClick = () => {
    this.setState((state) => ({ count: state.count + 1 }));
  };

  render() {
    console.log("Count Class Component");
    return (
      <div className="count__container">
        <h2>{this.state.count}</h2>
        <button className="inc__btn" onClick={this.handleClick}>
          +
        </button>
      </div>
    );
  }
}

export default CountClassComponent;

import React from "react";

import "./style.css";

class Header extends React.Component {
  shouldComponentUpdate = (nextProps, nextState) => {
    return nextState !== this.state;
  };
  render() {
    return (
      <div className="header">
        <p className="header__label">Header</p>
      </div>
    );
  }
}

export default Header;

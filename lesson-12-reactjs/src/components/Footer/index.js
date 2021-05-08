import React from "react";

import "./style.css";

class Footer extends React.Component {
  shouldComponentUpdate = (nextProps, nextState) => {
    return nextState !== this.state;
  };
  render() {
    return (
      <div className="footer">
        <p className="footer__label">Footer</p>
      </div>
    );
  }
}

export default Footer;

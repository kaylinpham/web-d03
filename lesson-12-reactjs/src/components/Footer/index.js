import React from "react";

import "./style.css";

class Footer extends React.PureComponent {
  // shouldComponentUpdate = (nextProps, nextState) => {
  //   return nextState !== this.state;
  // };
  render() {
    console.log("Footer");
    return (
      <div className="footer">
        <p className="footer__label">Footer</p>
      </div>
    );
  }
}

export default Footer;

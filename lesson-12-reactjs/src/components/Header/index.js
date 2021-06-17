import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./style.css";

class Header extends React.PureComponent {
  // shouldComponentUpdate = (nextProps, nextState) => {
  //   return nextState !== this.state;
  // };
  render() {
    console.log("Header");
    return (
      <div className="header">
        <p className="header__label">Header</p>
        <ul className="nav">
          <li>
            <NavLink
              to="/home"
              className="header__link"
              activeClassName="header__link-actived"
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sign-in"
              className="header__link"
              activeClassName="header__link-actived"
            >
              LOG IN
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sign-up"
              className="header__link"
              activeClassName="header__link-actived"
            >
              SIGN UP
            </NavLink>
            <NavLink
              to="/posts"
              className="header__link"
              activeClassName="header__link-actived"
            >
              POSTS
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;

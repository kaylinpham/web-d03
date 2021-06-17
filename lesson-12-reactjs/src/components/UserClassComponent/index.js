import React from "react";
import "./style.css";

class UserClassComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    return nextProps.postInfo !== this.props.postInfo;
  };
  render() {
    console.log("User Class Component");
    const { name, age, gender } = this.props;
    return (
      <div className="user-class__component">
        <p className="name">Name: {name}</p>
        <p className="age">Age: {age}</p>
        <p className="gender">Gender: {gender}</p>
      </div>
    );
  }
}

export default UserClassComponent;

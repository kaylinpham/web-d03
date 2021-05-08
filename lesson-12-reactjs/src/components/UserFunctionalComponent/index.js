import React from "react";
import "./style.css";
const UserFunctionalComponent = React.memo(function UserFunctionalComponent(
  props
) {
  const { name, age, gender } = props;
  return (
    <div className="functional-component">
      <p className="name">Name: {name}</p>
      <p className="age">Age: {age}</p>
      <p className="gender">Gender: {gender}</p>
    </div>
  );
});

export default UserFunctionalComponent;

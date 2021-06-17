import React, { useState } from "react";

import "./style.css";

const CountFunctionalComponent = React.memo(function CountFunctionalComponent(
  props
) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((count) => {
      return count + 1;
    });
  };

  return (
    <div className="count__container">
      <h2>{count}</h2>
      <button className="inc__btn" onClick={handleClick}>
        +
      </button>
    </div>
  );
});

export default CountFunctionalComponent;

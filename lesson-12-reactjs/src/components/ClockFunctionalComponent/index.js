import React, { Component, useState, useEffect } from "react";
const ClockFunctionalComponent = React.memo(
  function ClockFunctionalComponent() {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
      const setTime = setInterval(() => {
        setDate((date) => {
          return new Date();
        });
      }, 1000);
      return () => {
        clearInterval(setTime);
      };
    }, []);
    return (
      <div className="clock__container">
        <b>Bây giờ là:</b>
        <p>{date.toLocaleTimeString()}</p>
      </div>
    );
  }
);

export default ClockFunctionalComponent;

import React from "react";

function TimeRental({ hour, handleDecrement, handleIncrement, label }) {
  //   function handleIncrement() {
  //     if (index === 1) {
  //       setCounter((prevState) => ({
  //         ...prevState,
  //         hour: prevState.hour + 0.5,
  //       }));
  //     } else {
  //       setCounter((prevState) => ({
  //         ...prevState,
  //         day: (prevState.day = 24),
  //       }));
  //     }
  //   }
  //   function handleDecrement() {
  //     if (index === 1) {
  //       if (countHour > 0.5) {
  //         setCounter((prevState) => ({
  //           ...prevState,
  //           hour: prevState.hour - 0.5,
  //         }));
  //       }
  //     } else {
  //       setCounter((prevState) => ({
  //         ...prevState,
  //         day: (prevState.day = 12),
  //       }));
  //     }
  //   }
  return (
    <>
      <h3>{label}</h3>
      <div className="details-wrapper_time">
        <div className="counter-wrapper">
          <div className="items__controll" onClick={handleDecrement}>
            -
          </div>
          <div className="items__current">{hour}</div>
          <div className="items__controll" onClick={handleIncrement}>
            +
          </div>
        </div>
      </div>
    </>
  );
}
export default TimeRental;

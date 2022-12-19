import React from "react";

function NumberProduct({ handleDecrement, handleIncrement, label, quantity }) {
  return (
    <>
      <h3>{label}</h3>
      <div className="details-wrapper_quantity">
        <div className="items counter-wrapper">
          <div className="items__control" onClick={handleDecrement}>
            -
          </div>
          <div className="items__current">{quantity}</div>
          <div className="items__control" onClick={handleIncrement}>
            +
          </div>
        </div>
      </div>
    </>
  );
}
export default NumberProduct;

import React from "react";

// function PaymentMethod({ name, value, onChange }) {
//   function handleChange({ target }) {
//     // onChange({ name: name, value: target.value });
//     console.log(target.closest(".cash").innerText);
//   }
//   return (
//     <>
//       <h3>Способ оплаты</h3>
//       <div className="payment-method">
//         <div
//           className={
//             "cash-payments mr-b btn-payments " +
//             (true === value ? "active" : false)
//           }
//           onClick={handleChange}
//         >
//           <div className="icons"> </div>
//           <p className="cash">Наличные</p>
//         </div>
//         <div
//           className={
//             "no-cash_payments btn-payments " +
//             (true === value ? "active" : false)
//           }
//           onClick={handleChange}
//         >
//           <div className="icons"> </div>
//           <p className="cash">Перевод</p>
//         </div>
//       </div>
//     </>
//   );
// }
// export default PaymentMethod;

const RadioFild = ({ options, name, onChange, label }) => {
  function handleChange({ target }) {
    onChange({ name: target.name, value: target.value });
  }
  return (
    <div className="rental-choice">
      <label className="label">{label}</label>
      <div className="form-container">
        {options.map((option) => (
          <div key={option.name + "_" + option.value} className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name={name}
              id={option.name + "_" + option.value}
              value={option.value}
              onChange={handleChange}
            />
            <label
              className="form-check-label"
              htmlFor={option.name + "_" + option.value}
            >
              {option.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RadioFild;

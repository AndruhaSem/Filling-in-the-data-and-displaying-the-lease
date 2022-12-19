import React from "react";

// function RadioFildDeposit({ index, setIndex }) {
//   function handleButtonsDepositChange(ind) {
//     setIndex((prevState) => ({
//       ...prevState,
//       deposit: ind,
//     }));
//   }
//   return (
//     <>
//       <h3>Залог</h3>
//       <div className="info-client">
//         <div
//           className={
//             "client-deposit pledge-button mr-b " + (1 === index ? "active" : "")
//           }
//           onClick={() => handleButtonsDepositChange(1)}
//         >
//           <div className="icons"> </div>
//           <p className="deposit">Документы</p>
//         </div>
//         <div
//           className={
//             "client-deposit_cash pledge-button " + (2 === index ? "active" : "")
//           }
//           onClick={() => handleButtonsDepositChange(2)}
//         >
//           <div className="icons"> </div>
//           <p className="deposit">Наличка</p>
//         </div>
//       </div>
//     </>
//   );
// }
// export default RadioFildDeposit;

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

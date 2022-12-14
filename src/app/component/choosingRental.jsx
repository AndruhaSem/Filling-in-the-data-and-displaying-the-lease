import React from "react";

// function ChoosingRental({ index, onButtonChange }) {
//   return (
//     <>
//       <div className="position">
//         <div
//           className={
//             "info-position__street btn-position " +
//             (1 === index ? "active" : "")
//           }
//           onClick={() => onButtonChange(1)}
//         >
//           <div className="icons"> </div>
//           <p className="name-position">Пляж</p>
//         </div>
//         <div
//           className={
//             "info-position__room mr btn-position " +
//             (2 === index ? "active" : "")
//           }
//           onClick={() => onButtonChange(2)}
//         >
//           <div className="icons"> </div>
//           <p className="name-position">Помещение</p>
//         </div>
//       </div>
//     </>
//   );
// }
// export default ChoosingRental;

const RadioFild = ({ options, name, value, onChange }) => {
  function handleChange({ target }) {
    onChange({ name: target.name, value: target.value });
  }
  return (
    <div className="rental-choice">
      <div className="form-container">
        {options.map((option) => (
          <div key={option.name + "_" + option.value} className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name={name}
              id={option.name + "_" + option.value}
              checked={option.value === value}
              value={option.value}
              onChange={handleChange}
              onClick={option.func}
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

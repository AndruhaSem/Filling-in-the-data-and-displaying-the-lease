import React from "react";

// function CustomerData(){
//     return(
//         <>
//             <h3>Даные покупателя</h3>
//             <form className="form-client">
//                 <div className="user-box">
//                     <input className="name-client" type="text" name="" required=""/>
//                     <label>Ф.И.О</label>
//                 </div>
//                 <div className="user-box">
//                     <input className="number-client" type="number" name="" required=""/>
//                     <label>Телефон</label>
//                 </div>
//             </form>
//         </>
//     )
// }
// export default CustomerData

const TextField = ({ label, type, name, value, onChange, error }) => {
  function handleChange({ target }) {
    onChange({ name: target.name, value: target.value });
  }
  function getInputClasses() {
    return "form-control" + (error ? " is-invalid" : "");
  }
  return (
    <div className="mb-4">
      <label htmlFor={name}>{label}</label>
      <div className="user-box">
        <input
          type={type}
          id={name}
          value={value}
          onChange={handleChange}
          name={name}
          className={getInputClasses()}
        />
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
};
export default TextField;

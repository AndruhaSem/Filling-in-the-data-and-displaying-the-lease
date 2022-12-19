import React, { useState, useEffect } from "react";
import ChoosingRental from "./choosingRental";
import NumberProduct from "./numberProduct";
import TimeRental from "./timeRental";
import PaymentMethod from "./paymentMethod";
import RadioFildDeposit from "./RadioFilddeposit";
import TextField from "./textField";
import { validator } from "./validator";

function AddRental() {
  const [data, setData] = useState({
    кentalСhoice: "Пляж",
    quantity: 1,
    payment: "",
    deposit: "Нет залога",
    name: "User",
    telephone: "",
    product: "сапборд",
    hour: 0.5,
  });

  function handleIncrement(e) {
    if (e.target.className === "items__control") {
      setData((prevState) => ({
        ...prevState,
        quantity: prevState.quantity + 1,
      }));
    } else {
      if (data.кentalСhoice === "Пляж") {
        setData((prevState) => ({
          ...prevState,
          hour: prevState.hour + 0.5,
        }));
      } else {
        setData((prevState) => ({
          ...prevState,
          hour: (prevState.hour = 24),
        }));
      }
    }
  }
  function handleDecrement(e) {
    if (e.target.className === "items__control") {
      if (data.quantity > 1) {
        setData((prevState) => ({
          ...prevState,
          quantity: prevState.quantity - 1,
        }));
      }
    } else {
      if (data.кentalСhoice === "Пляж") {
        if (data.hour > 0.5) {
          setData((prevState) => ({
            ...prevState,
            hour: prevState.hour - 0.5,
          }));
        }
      } else {
        setData((prevState) => ({
          ...prevState,
          hour: (prevState.hour = 12),
        }));
      }
    }
  }
  const [errors, setErrors] = useState({});
  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const validatorConfig = {
    payment: {
      isRequiredPayment: {
        message: "Выберете способ оплаты",
      },
    },
    deposit: {
      isRequired: {
        message: "Выберете способ залога",
      },
    },
    name: {
      isRequired: {
        message: "Имя обязательно для заполнения",
      },
    },
    telephone: {
      isRequired: {
        message: "Телефон обязательно для заполнения",
      },
      isCapitalSymbol: {
        message: "Телефон должен содержать только числа",
      },
      min: {
        message: "Телефон должен состоять из 11 символов",
        value: 11,
      },
    },
  };
  function goBack(e) {
    if (e.target.value === "Помещение") {
      setData((prevState) => ({
        ...prevState,
        hour: 12,
      }));
    } else {
      setData((prevState) => ({
        ...prevState,
        hour: 0.5,
        deposit: "Нет залога",
        telephone: "",
      }));
    }
  }
  function apdateData() {
    setData({
      кentalСhoice: "Пляж",
      quantity: 1,
      payment: "",
      deposit: "Нет залога",
      name: "User",
      telephone: "",
      product: "сапборд",
      hour: 0.5,
    });
  }
  useEffect(() => {
    validate();
  }, [data]);
  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;

    console.log(data);
    apdateData();
    //Обновить состоянин data
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="container_rental">
          <h2>SUP</h2>
          <ChoosingRental
            options={[
              { name: "Пляж", value: "Пляж", func: goBack },
              { name: "Помещение", value: "Помещение", func: goBack },
            ]}
            value={data.кentalСhoice}
            name="кentalСhoice"
            onChange={handleChange}
          />
          <NumberProduct
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            quantity={data.quantity}
            label="Количество"
          />
          <TimeRental
            index={data.кentalСhoice}
            hour={data.hour}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            label="Время"
          />
          <PaymentMethod
            options={[
              { name: "Наличные", value: "Наличные" },
              { name: "Перевод", value: "Перевод" },
            ]}
            name="payment"
            onChange={handleChange}
            label="Способ оплаты"
          />
        </div>
        <div
          className={
            "container-info__client " +
            ("Помещение" === data.кentalСhoice ? "active" : "")
          }
        >
          <RadioFildDeposit
            options={[
              { name: "Документы", value: "Документы" },
              { name: "Наличка", value: "Наличка" },
            ]}
            name="deposit"
            onChange={handleChange}
            label="Залог"
          />
          <label className="label">Данные покупателя</label>
          <div className="width">
            <TextField
              label="И.Ф.О"
              name="name"
              type="text"
              value={data.name}
              onChange={handleChange}
              error={errors.name}
            />
            <TextField
              label="Телефон"
              name="telephone"
              type="number"
              value={data.telephone}
              onChange={handleChange}
              error={errors.telephone}
            />
          </div>
        </div>
        <div className="create_button">
          <button
            className="create-button__arrange"
            type="submit"
            disabled={!isValid}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddRental;

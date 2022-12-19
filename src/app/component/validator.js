export function validator(data, config) {
  const errors = {};
  function validate(validateMethod, data, config, status) {
    let statusValidate;
    if (status.кentalСhoice === "Пляж") {
      switch (validateMethod) {
        case "isRequiredPayment": {
          statusValidate = data.trim() === "";
          break;
        }
      }
      if (statusValidate) return config.message;
    } else {
      switch (validateMethod) {
        case "isRequired": {
          statusValidate = data.trim() === "";
          break;
        }
        case "isCapitalSymbol": {
          const capitalRegExp = /[a-zA-Z]+/g;
          statusValidate = capitalRegExp.test(data);
          break;
        }
        case "min": {
          statusValidate = data.length < config.value;
          break;
        }

        default:
          break;
      }
      if (statusValidate) return config.message;
    }
  }
  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod,
        data[fieldName],
        config[fieldName][validateMethod],
        data
      );
      if (error && !errors[fieldName]) {
        errors[fieldName] = error;
      }
    }
  }
  return errors;
}

import FormValidator from "../../lib/FormValidator";

const fv = new FormValidator(".login");

function validateLength(value, inputField) {
  if (value <= 8) {
    return {
      pass: false,
      error: "Email must not be less than 8 character",
    };
  }

  return {
    pass: true,
  };
}

fv.register("#emailLogin", validateLength);
fv.register("#pwLogin", validateLength);

window.fv = fv;

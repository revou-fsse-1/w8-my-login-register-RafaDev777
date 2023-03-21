export default class FormValidator {
  constructor(selector) {
    this.form = document.querySelector(selector);
    this.inputWithErrors = new Set();

    this.form.addEventListener("submit,", (e) => {
      e.preventDefault();
      if (!this.hasErrors) {
        this.form.submit();
      }
    });
  }

  get hasErrors() {
    return this.inputWithErrors.size > 0;
  }

  register(selector, check) {
    const inputField = this.form.querySelector(selector);
    const errorElement = inputField
      .closest(".input")
      .querySelector(".input__error");

    const exec = (hideErrors) => {
      const { pass, error } = check(inputField.value, inputField);

      if (!hideErrors) {
        errorElement.textContent = error || "";
      }

      if (!pass) {
        this.inputWithErrors.add(inputField);
      } else {
        this.inputWithErrors.delete(inputField);
      }
    };

    inputField.addEventListener("change", () => exec());
    exec(true);
  }
}

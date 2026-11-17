"use strict";

const signupForm = document.getElementById("signupForm");
const successMessage = document.getElementById("successMessage");

const fields = [
  {
    input: document.getElementById("nameInput"),
    error: document.getElementById("nameError"),
    validate: value => (value.trim() === "" ? "Name is required." : "")
  },
  {
    input: document.getElementById("emailInput"),
    error: document.getElementById("emailError"),
    validate: value => {
      if (value.trim() === "") return "Email is required.";
      if (!value.includes("@")) return "Email must contain @.";
      return "";
    }
  },
  {
    input: document.getElementById("passwordInput"),
    error: document.getElementById("passwordError"),
    validate: value => (value.length < 6 ? "Password must be at least 6 characters." : "")
  }
];

function validateField(field) {
  const message = field.validate(field.input.value);
  field.error.textContent = message;
  field.input.classList.toggle("invalid", message !== "");
  field.input.classList.toggle("valid", message === "");
  return message === "";
}

fields.forEach(field => {
  field.input.addEventListener("input", () => {
    successMessage.hidden = true;
    if (field.error.textContent !== "") {
      validateField(field);
    }
  });
});

signupForm.addEventListener("submit", event => {
  event.preventDefault();

  const results = fields.map(validateField);
  successMessage.hidden = !results.every(Boolean);
});

"use strict";

const steps = document.querySelectorAll(".step");
const inputs = [
  document.getElementById("nameInput"),
  document.getElementById("emailInput"),
  document.getElementById("passwordInput")
];
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");
const progress = document.getElementById("progress");
const formArea = document.getElementById("formArea");
const summary = document.getElementById("summary");

const validators = [
  value => (/^[A-Za-z]+( [A-Za-z]+)*$/.test(value) ? "" : "Enter a valid name (alphabets only)."),
  value => (/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value) ? "" : "Enter a valid email address."),
  value => (value.length >= 6 ? "" : "Password must be at least 6 characters.")
];

let currentStep = 0;

function showStep() {
  steps.forEach((step, index) => step.classList.toggle("active", index === currentStep));
  progress.textContent = `Step ${currentStep + 1} of ${steps.length}`;
  backButton.disabled = currentStep === 0;
  nextButton.textContent = currentStep === steps.length - 1 ? "Finish" : "Next";
}

function validateCurrentStep() {
  const input = inputs[currentStep];
  const value = currentStep === 2 ? input.value : input.value.trim();
  const message = validators[currentStep](value);
  steps[currentStep].querySelector(".error").textContent = message;
  input.style.borderColor = message ? "red" : "green";
  return message === "";
}

function showSummary() {
  formArea.hidden = true;
  progress.hidden = true;
  summary.hidden = false;
  summary.innerHTML = `
    <h3>Summary</h3>
    <p>Name: ${inputs[0].value.trim()}</p>
    <p>Email: ${inputs[1].value.trim()}</p>
    <p>Password: ${"*".repeat(inputs[2].value.length)}</p>
  `;
}

nextButton.addEventListener("click", () => {
  if (!validateCurrentStep()) return;

  if (currentStep === steps.length - 1) {
    showSummary();
  } else {
    currentStep++;
    showStep();
  }
});

backButton.addEventListener("click", () => {
  if (currentStep > 0) {
    currentStep--;
    showStep();
  }
});

showStep();

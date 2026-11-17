"use strict";

const MAX_CHARACTERS = 100;
const WARNING_LIMIT = 20;

const messageBox = document.getElementById("messageBox");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("resetButton");

const allowedKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End", "Tab"];

function updateCounter() {
  const remaining = MAX_CHARACTERS - messageBox.value.length;
  counter.textContent = `${remaining} characters left`;
  counter.classList.toggle("warning", remaining <= WARNING_LIMIT && remaining > 0);
  counter.classList.toggle("danger", remaining <= 0);
}

messageBox.addEventListener("keydown", event => {
  const isShortcut = event.ctrlKey || event.metaKey;
  const hasSelection = messageBox.selectionStart !== messageBox.selectionEnd;

  if (messageBox.value.length >= MAX_CHARACTERS && !allowedKeys.includes(event.key) && !isShortcut && !hasSelection) {
    event.preventDefault();
  }
});

messageBox.addEventListener("input", () => {
  if (messageBox.value.length > MAX_CHARACTERS) {
    messageBox.value = messageBox.value.slice(0, MAX_CHARACTERS);
  }
  updateCounter();
});

resetButton.addEventListener("click", () => {
  messageBox.value = "";
  updateCounter();
  messageBox.focus();
});

updateCounter();

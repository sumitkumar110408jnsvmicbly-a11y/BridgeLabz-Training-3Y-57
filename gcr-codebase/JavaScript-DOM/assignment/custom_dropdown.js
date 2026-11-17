"use strict";

const dropdown = document.getElementById("dropdown");
const dropdownButton = document.getElementById("dropdownButton");
const dropdownList = document.getElementById("dropdownList");

const options = ["HTML", "CSS", "JavaScript", "Node.js", "Python"];

options.forEach(option => {
  const item = document.createElement("li");
  item.textContent = option;
  dropdownList.appendChild(item);
});

dropdownButton.addEventListener("click", () => {
  dropdownList.hidden = !dropdownList.hidden;
});

dropdownList.addEventListener("click", event => {
  if (event.target.tagName === "LI") {
    dropdownButton.textContent = `${event.target.textContent} ▾`;
    dropdownList.hidden = true;
  }
});

document.addEventListener("click", event => {
  if (!dropdown.contains(event.target)) {
    dropdownList.hidden = true;
  }
}, true);

"use strict";

const themeButtons = document.getElementById("themeButtons");
const themeInfo = document.getElementById("themeInfo");

function applyTheme(theme) {
  document.body.setAttribute("class", `theme-${theme}`);
  document.body.setAttribute("data-theme", theme);
  themeInfo.textContent = `Current theme: ${document.body.getAttribute("data-theme")}`;
}

themeButtons.addEventListener("click", event => {
  const button = event.target.closest("button");
  if (button) {
    applyTheme(button.getAttribute("data-theme-name"));
  }
});

applyTheme("light");

"use strict";

const box = document.getElementById("box");
const coordinates = document.getElementById("coordinates");
const DOT_SIZE = 12;

box.addEventListener("mousemove", event => {
  coordinates.textContent = `clientX: ${event.clientX}, clientY: ${event.clientY}`;
});

box.addEventListener("mouseleave", () => {
  coordinates.textContent = "Move the mouse inside the box. Double-click to drop a dot.";
});

box.addEventListener("dblclick", event => {
  const rect = box.getBoundingClientRect();
  const dot = document.createElement("div");
  dot.className = "dot";
  dot.style.left = `${event.clientX - rect.left - box.clientLeft - DOT_SIZE / 2}px`;
  dot.style.top = `${event.clientY - rect.top - box.clientTop - DOT_SIZE / 2}px`;
  box.appendChild(dot);
});

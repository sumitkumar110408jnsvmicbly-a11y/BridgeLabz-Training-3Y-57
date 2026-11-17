"use strict";

const gallery = document.getElementById("gallery");
const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");

const colors = ["#e74c3c", "#3498db", "#27ae60", "#8e44ad", "#e67e22", "#16a085"];

function makeImage(color, label) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 400 300">
    <rect width="400" height="300" fill="${color}"/>
    <text x="200" y="165" font-size="48" text-anchor="middle" fill="#ffffff" font-family="Arial">Image ${label}</text>
  </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

colors.forEach((color, index) => {
  const image = document.createElement("img");
  image.src = makeImage(color, index + 1);
  image.alt = `Gallery image ${index + 1}`;
  gallery.appendChild(image);
});

gallery.addEventListener("click", event => {
  if (event.target.tagName === "IMG") {
    modalImage.src = event.target.src;
    overlay.classList.add("open");
  }
});

modal.addEventListener("click", event => {
  event.stopPropagation();
});

overlay.addEventListener("click", () => {
  overlay.classList.remove("open");
});

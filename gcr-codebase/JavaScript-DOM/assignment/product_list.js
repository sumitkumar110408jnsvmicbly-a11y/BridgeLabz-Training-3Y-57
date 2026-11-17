"use strict";

const productList = document.getElementById("productList");
const productInput = document.getElementById("productInput");
const addButton = document.getElementById("addButton");

let editingItem = null;

function createItem(text) {
  const item = document.createElement("li");
  item.innerHTML = `
    <span class="text"></span>
    <span class="actions">
      <button class="edit">Edit</button>
      <button class="delete">Delete</button>
    </span>
  `;
  item.querySelector(".text").textContent = text;
  return item;
}

function saveEdit(item) {
  const input = item.querySelector(".edit-input");
  if (!input) return;

  const text = document.createElement("span");
  text.className = "text";
  text.textContent = input.value.trim() || input.dataset.original;
  input.replaceWith(text);
  item.querySelector(".edit").textContent = "Edit";

  if (editingItem === item) editingItem = null;
}

function startEdit(item) {
  if (editingItem) saveEdit(editingItem);

  const text = item.querySelector(".text");
  const input = document.createElement("input");
  input.type = "text";
  input.className = "edit-input";
  input.value = text.textContent;
  input.dataset.original = text.textContent;
  text.replaceWith(input);

  item.querySelector(".edit").textContent = "Save";
  editingItem = item;
  input.focus();
}

function addProduct() {
  const text = productInput.value.trim();
  if (text === "") return;
  productList.appendChild(createItem(text));
  productInput.value = "";
  productInput.focus();
}

productList.addEventListener("click", event => {
  const button = event.target.closest("button");
  if (!button) return;

  const item = button.closest("li");

  if (button.classList.contains("delete")) {
    if (editingItem === item) editingItem = null;
    item.remove();
  } else if (button.classList.contains("edit")) {
    if (editingItem === item) {
      saveEdit(item);
    } else {
      startEdit(item);
    }
  }
});

productList.addEventListener("keydown", event => {
  if (event.key === "Enter" && event.target.classList.contains("edit-input")) {
    saveEdit(event.target.closest("li"));
  }
});

document.addEventListener("click", event => {
  if (editingItem && !editingItem.contains(event.target)) {
    saveEdit(editingItem);
  }
});

addButton.addEventListener("click", addProduct);
productInput.addEventListener("keydown", event => {
  if (event.key === "Enter") addProduct();
});

["Laptop", "Mouse", "Keyboard"].forEach(text => productList.appendChild(createItem(text)));

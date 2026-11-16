"use strict";

function showMessageBroken() {
  greeting = "Welcome";
  console.log(greeting);
}

try {
  showMessageBroken();
} catch (error) {
  console.log(`Original code failed -> ${error.name}: ${error.message}`);
}

function showMessage() {
  const greeting = "Welcome";
  console.log(greeting);
}
showMessage();

console.log("typeof greeting outside function:", typeof greeting);

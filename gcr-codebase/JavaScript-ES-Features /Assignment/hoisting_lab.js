"use strict";

function original() {
  console.log(score);
  announce();
  var score = 50;
  function announce() { console.log("Game started"); }

  let status = "ready";
  startGame();
  function startGame() { console.log(status); }
}
console.log("--- Original code ---");
original();

function tdzTrap() {
  try {
    startGame();
  } catch (error) {
    console.log(`TDZ trap -> ${error.name}: ${error.message}`);
  }
  let status = "ready";
  function startGame() { console.log(status); }
}
console.log("\n--- Temporal Dead Zone trap ---");
tdzTrap();

function fixed() {
  var score = 50;
  let status = "ready";
  function announce() { console.log("Game started"); }
  function startGame() { console.log(status); }

  console.log(score);
  announce();
  startGame();
}
console.log("\n--- Fixed code ---");
fixed();

function arrowVersion() {
  try { announceConst(); } catch (error) { console.log(`const arrow before definition -> ${error.name}: ${error.message}`); }
  const announceConst = () => console.log("Game started (const arrow)");
  announceConst();

  try { announceVar(); } catch (error) { console.log(`var arrow before definition   -> ${error.name}: ${error.message}`); }
  var announceVar = () => console.log("Game started (var arrow)");
  announceVar();
}
console.log("\n--- Arrow function comparison ---");
arrowVersion();

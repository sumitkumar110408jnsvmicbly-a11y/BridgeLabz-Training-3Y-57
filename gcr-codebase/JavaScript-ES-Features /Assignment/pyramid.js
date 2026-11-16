"use strict";

const userInput = typeof process !== "undefined" ? Number(process.argv[2]) : NaN;
const rows = Number.isInteger(userInput) && userInput > 0 ? userInput : 5;

function pyramidLet(limit) {
  for (let i = 1; i <= limit; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += "* ";
    }
    console.log(line.trimEnd());
  }
  console.log("let  -> typeof i after loop:", typeof i);
}

function pyramidVar(limit) {
  for (var i = 1; i <= limit; i++) {
    var line = "";
    for (var j = 1; j <= i; j++) {
      line += "* ";
    }
    console.log(line.trimEnd());
  }
  console.log("var  -> i after loop:", i, "| j after loop:", j);
}

console.log(`--- Pyramid with let (${rows} rows) ---`);
pyramidLet(rows);
console.log(`\n--- Pyramid with var (${rows} rows) ---`);
pyramidVar(rows);

const withVar = [];
for (var a = 0; a < 3; a++) withVar.push(() => a);
const withLet = [];
for (let b = 0; b < 3; b++) withLet.push(() => b);
console.log("\nvar closures:", withVar.map(fn => fn()));
console.log("let closures:", withLet.map(fn => fn()));

try {
  (function () {
    for (k = 0; k < 2; k++) { }
  })();
} catch (error) {
  console.log(`\nUndeclared loop variable -> ${error.name}: ${error.message}`);
}

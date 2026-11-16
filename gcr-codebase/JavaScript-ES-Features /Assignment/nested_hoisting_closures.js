"use strict";

function outer() {
  console.log(count);
  var count = 5;
  function inner() {
    console.log(count);
    var count = 10;
  }
  inner();
}

console.log("--- Original ---");
outer();

function outerWithoutShadow() {
  var count = 5;
  function inner() {
    console.log(count);
  }
  inner();
}
console.log("\n--- Without shadowing (closure reads outer count) ---");
outerWithoutShadow();

function outerArrow() {
  console.log(count);
  var count = 5;
  const inner = () => {
    console.log(count);
    var count = 10;
  };
  inner();
}
console.log("\n--- Arrow version ---");
outerArrow();
function tdzCheck() {
  try { inner(); } catch (error) { console.log(`\nCalling arrow before definition -> ${error.name}: ${error.message}`); }
  const inner = () => {};
}
tdzCheck();

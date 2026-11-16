function demo(a, a) {
  total = 10;
  var removed = delete total;
  console.log("a =", a, "(the LAST duplicate wins)");
  console.log("delete total returned:", removed);
}
console.log("--- Sloppy mode ---");
demo(5, 10);
console.log("typeof total after delete:", typeof total);

console.log("\n--- Strict mode ---");
const strictTests = [
  ["Duplicate parameter names", '"use strict"; function demo(a, a) {}'],
  ["Assignment to undeclared variable", '"use strict"; total = 10;'],
  ["delete on a variable name", '"use strict"; var total = 10; delete total;']
];

for (const [label, source] of strictTests) {
  try {
    new Function(source)();
    console.log(`${label}: no error`);
  } catch (error) {
    console.log(`${label} -> ${error.name}: ${error.message}`);
  }
}

function demoFixed(a, b) {
  "use strict";
  let total = 10;
  const result = a + b + total;
  const data = { total };
  delete data.total;
  console.log("\n--- Corrected version ---");
  console.log("a =", a, "| b =", b, "| result =", result);
  console.log("data after delete:", data);
}
demoFixed(5, 10);

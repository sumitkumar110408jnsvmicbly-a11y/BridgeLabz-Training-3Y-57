"use strict";

class DivisionByZeroError extends Error {
  constructor(message) { super(message); this.name = "DivisionByZeroError"; }
}
class NegativeRootError extends Error {
  constructor(message) { super(message); this.name = "NegativeRootError"; }
}
class InvalidOperationError extends Error {
  constructor(message) { super(message); this.name = "InvalidOperationError"; }
}

function calculate(operation, a, b) {
  switch (operation) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "divide":
      if (b === 0) throw new DivisionByZeroError("Cannot divide by zero");
      return a / b;
    case "power":
      return Math.pow(a, b);
    case "root":
      if (a < 0) throw new NegativeRootError(`Cannot take the root of a negative number (${a})`);
      return Math.sqrt(a);
    default:
      throw new InvalidOperationError(`Unknown operation: "${operation}"`);
  }
}

function runAll(operations, num1, num2) {
  console.log(`Numbers: num1 = ${num1}, num2 = ${num2}`);
  console.log("-----------------------------------------");
  for (const operation of operations) {
    try {
      const result = calculate(operation, num1, num2);
      console.log(`${operation.padEnd(9)} -> ${result}`);
    } catch (error) {
      console.log(`${operation.padEnd(9)} -> ${error.name}: ${error.message}`);
    }
  }
  console.log("-----------------------------------------\n");
}

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

console.log("===== Calculator Summary =====");
runAll(operations, num1, num2);

console.log("===== Extra tests =====");
runAll(["root", "modulus", "divide"], -9, 3);

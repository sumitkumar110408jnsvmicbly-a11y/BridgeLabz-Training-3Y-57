"use strict";

class NegativeAmountError extends Error {
  constructor(message) { super(message); this.name = "NegativeAmountError"; }
}
class MissingFieldError extends Error {
  constructor(message) { super(message); this.name = "MissingFieldError"; }
}
class NullTransactionError extends Error {
  constructor(message) { super(message); this.name = "NullTransactionError"; }
}

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

function validateTransaction(transaction) {
  if (transaction === null) {
    throw new NullTransactionError("Transaction entry is null");
  }
  if (transaction.id === undefined) {
    throw new MissingFieldError("Transaction is missing 'id'");
  }
  if (transaction.amount === undefined) {
    throw new MissingFieldError(`Transaction ${transaction.id} is missing 'amount'`);
  }
  if (transaction.amount < 0) {
    throw new NegativeAmountError(`Transaction ${transaction.id} has negative amount (${transaction.amount})`);
  }
  return true;
}

const valid = [];
const invalid = [];

for (let index = 0; index < transactions.length; index++) {
  const transaction = transactions[index];

  debugger;

  try {
    validateTransaction(transaction);
    valid.push(transaction);
  } catch (error) {
    invalid.push({ index, type: error.name, message: error.message });
  }
}

console.log("===== Transaction Report =====");
console.log("Valid transactions  :", valid);
console.log("Invalid transactions:");
for (const entry of invalid) {
  console.log(`  [#${entry.index}] ${entry.type}: ${entry.message}`);
}

const errorCounts = {};
for (const entry of invalid) {
  errorCounts[entry.type] = (errorCounts[entry.type] || 0) + 1;
}
console.log("Errors by type      :", errorCounts);
console.log(`Successful: ${valid.length} | Failed: ${invalid.length} | Total: ${transactions.length}`);

"use strict";

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const errors = [];

for (let i = 0; i < rawData.length; i++) {
  const lineNumber = i + 1;

  try {
    const parsed = JSON.parse(rawData[i]);

    const missing = ["user", "age"].filter(key => !(key in parsed));
    if (missing.length > 0) {
      throw new Error(`Missing key(s): ${missing.join(", ")}`);
    }

    cleanData.push(parsed);
  } catch (error) {
    const kind = error instanceof SyntaxError ? "Invalid JSON" : "Validation error";
    errors.push({ line: lineNumber, kind, message: error.message });
    console.log(`Line ${lineNumber}: ${kind} -> ${error.message}`);
  }
}

console.log("\nClean entries:", cleanData);
console.log(`Valid: ${cleanData.length} | Errors: ${errors.length}`);

const adults = cleanData
  .map(entry => ({ ...entry, age: Number(entry.age) }))
  .filter(entry => entry.age >= 18);

console.log("\nBonus - users aged 18+ (age converted to Number):", adults);
console.log("Removed (under 18):", cleanData.length - adults.length);

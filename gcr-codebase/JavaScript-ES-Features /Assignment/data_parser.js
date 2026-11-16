"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidEntries = [];

console.log("===== Conversion Report =====");

for (let i = 0; i < apiData.length; i++) {
  const value = apiData[i];

  const asNumber = Number(value);
  const asBoolean = Boolean(value);
  const asString = String(value);

  const isBlank = typeof value === "string" && value.trim() === "";
  const isMissing = value === null || value === undefined;
  const isValidNumber = !isBlank && !isMissing && Number.isFinite(asNumber);

  const status = isValidNumber ? "✔ VALID  " : "✖ INVALID";
  console.log(
    `${status} | index ${i} | raw: ${JSON.stringify(value)} | ` +
    `Number: ${asNumber} | Boolean: ${asBoolean} | String: "${asString}"`
  );

  if (isValidNumber) {
    validNumbers.push(asNumber);
  } else {
    invalidEntries.push({ index: i, raw: value, reason: isMissing ? "null/undefined" : isBlank ? "blank string" : "not a number" });
  }
}

console.log("\n===== Summary =====");
console.log("Valid numeric data :", validNumbers);
console.log("Invalid entries    :", invalidEntries);
console.log(`Valid: ${validNumbers.length} | Invalid: ${invalidEntries.length}`);

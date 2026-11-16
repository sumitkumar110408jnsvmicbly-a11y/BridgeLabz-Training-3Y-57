"use strict";

const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" }
];

function processEmployee(employee) {
  if (employee === null || typeof employee !== "object") {
    throw new TypeError("Employee record is not an object");
  }
  for (const key of ["name", "salary", "years"]) {
    if (!(key in employee)) {
      throw new Error(`Missing property "${key}"`);
    }
  }

  const salary = Number(employee.salary);
  const years = Number(employee.years);

  if (Number.isNaN(salary) || Number.isNaN(years)) {
    throw new TypeError(`Cannot convert salary/years to numbers for ${employee.name}`);
  }

  const bonus = years > 3 ? salary * 0.1 : salary * 0.05;
  return { name: employee.name, salary, years, bonus };
}

function printEmployees(list) {
  for (const employee of list) {
    try {
      const { name, salary, years, bonus } = processEmployee(employee);
      console.log(
        `Employee: ${name} | Salary: ₹${salary} | Experience: ${years} yrs | ` +
        `Bonus: ₹${bonus.toFixed(2)} | Total: ₹${(salary + bonus).toFixed(2)}`
      );
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  }
}

console.log("--- Given data ---");
printEmployees(employees);

console.log("\n--- Error handling tests ---");
printEmployees([
  { name: "Ravi", salary: "40000" },
  { name: "Neha", salary: "abc", years: "4" },
  null
]);

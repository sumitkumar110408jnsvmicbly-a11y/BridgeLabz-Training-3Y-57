"use strict";

const searchBox = document.getElementById("searchBox");
const rows = document.querySelectorAll("#studentRows tr");
const noResults = document.getElementById("noResults");

searchBox.addEventListener("input", () => {
  const query = searchBox.value.trim().toLowerCase();
  let visibleCount = 0;

  rows.forEach(row => {
    const matches = row.textContent.toLowerCase().includes(query);
    row.style.display = matches ? "" : "none";
    if (matches) visibleCount++;
  });

  noResults.hidden = visibleCount > 0;
});

let itemTable = document.getElementById('table-item');
let tableRow = itemTable.querySelectorAll('tr');
tableRow.forEach(row, () => {
  row.addEventListener("click", () => {
    row.setAttribute("data-bs-toggle","modal");
    row.setAttribute("data-bs-target","#myModal");
  });
});
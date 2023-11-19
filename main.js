let itemTable = document.getElementById('table-item');
let tableRow = itemTable.querySelectorAll('tr');

for(let i in tableRow){
  tableRow[i].addEventListener('click', function(){
    tableRow[i].setAttribute("data-bs-toggle","modal");
    tableRow[i].setAttribute("data-bs-target","#myModal");
  });
}
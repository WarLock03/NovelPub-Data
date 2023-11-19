function showAllData(){
  let table = document.getElementById('table-item');
  let table2 = document.getElementById('table-item2');
  let showAll = document.getElementById('showAll');
  
  if(table.style.display == "block"){
    table.style.display = "none";
    table2.style.display = "block";
    showAll.innerText = "‹‹ Show Less ››";
  }else{
    table.style.display = "block";
    table2.style.display = "none";
    showAll.innerText = "‹‹ Show All ››";
  }
  
}
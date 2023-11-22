//Search data

function searchNovel(){

  const list = document.getElementById("search-list");
  var input, filter, li, a, i, txtValue;
  input = document.getElementById("search-novel");
  if(input.value == ""){
    list.style.display = "none";
  }else{
    list.style.display = "block";
    filter = input.value.toUpperCase();
    li = list.getElementsByTagName("li");
  
   for (i = 0; i < li.length; i++) {
     a = li[i].getElementsByTagName("a")[0];
      if (a) {
        txtValue = a.textContent || a.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
              li[i].style.display = "";
          } else {
              li[i].style.display = "none";
        }
      }
    }
  }
}

// Sort data
var list, i, switching, b, shouldSwitch;

  list = document.getElementById("listofnovels");

  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    b = list.getElementsByTagName("A");
    // Loop through all list items:
    for (i = 0; i < (b.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Check if the next item should
      switch place with the current item: */
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        /* If next item is alphabetically lower than current item,
        mark as a switch and break the loop: */
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark the switch as done: */
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
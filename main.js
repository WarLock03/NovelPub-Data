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


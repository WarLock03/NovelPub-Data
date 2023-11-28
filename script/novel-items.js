async function fetchData(){
	    const response = await fetch('https://warlock03.github.io/NovelPub-Data/data.json');
	    
	    if(!response.ok){
	      const error = "Failed to fetch data. Please try refreshing the page";
	      throw new Error(error);
	    }
	    
	    const data = await response.json();
	    return data;
	  }
	  
	  fetchData()
	  .then(data => {
	    let searchList = document.getElementById('search-list');
	   for(let items in data){
	  	  let list = document.createElement('li');
	    	let linkData = document.createElement('a');
		    let titleText = document.createElement('p');
		    let imgCover = document.createElement('img');
		    list.setAttribute('id','items-list');
	    	linkData.setAttribute('href','');
		    imgCover.setAttribute('src','');
		    imgCover.setAttribute('alt','');
		    imgCover.src = data[items].cover;
		    imgCover.alt = data[items].title;
		    coverSrc = data[items].cover;
	    	titleText.textContent = data[items].title;
		    linkData.href = data[items].page;
		    linkData.appendChild(imgCover);
		    linkData.appendChild(titleText);
	    	list.appendChild(linkData);
		    searchList.appendChild(list);
	  	
	    }
	   
	   const list = document.querySelector("#paginated-list");
      const prevButton = document.querySelector("#prev-button");
      const nextButton = document.querySelector("#next-button");
      //const pageNumberValue = document.querySelector("#paging")
      
      let startIndex = 0;
      let endIndex = 10;
      let pageNumber = 0;
      
      const mapData = () => {
        const slicedData = data.slice(startIndex, endIndex)
          .map((row) => {
            return '<li><a href="'+row.page+'"><img src="'+row.cover+'" alt="'+row.title+'"/><p>'+row.title+'</p></a></li>';
          })
          .join("");
      
        list.innerHTML = slicedData;
      }
      
      mapData();
      
      prevButton.addEventListener("click", () => {
        if (endIndex < 20) {
          startIndex = 0;
          endIndex = 10;
        } else {
          startIndex -= 10;
          endIndex -= 10;
          pageNumber -= 1;
          let page = pageNumber;
          $("meta[name=url]").attr("content", window.location.href+"?page="+page);
        }
        //pageNumberValue.value = pageNumber;
        mapData();
      });
      
      nextButton.addEventListener("click", () => {
        if (endIndex < data.length) {
          startIndex += 10;
          endIndex += 10;
          pageNumber += 1;
          let page = pageNumber;
          $("meta[name=url]").attr("content", window.location.href+"?page="+page);
          
        }
        
       //pageNumberValue.value = pageNumber;
        mapData();
      });
      
      /*pageNumberValue.addEventListener("change",(e) => {
        let currentPageNumber = Number.parseInt(e.target.value)
        let maxPageNumber = Math.floor(data.length/10)
        if(currentPageNumber > maxPageNumber){
         currentPageNumber = maxPageNumber;
          e.target.value = value
        }
        else if(currentPageNumber < 0){
          currentPageNumber = 0;
          e.target.value = value
        }
         startIndex = currentPageNumber * 10;
         endIndex = startIndex + 10
         pageNumber = currentPageNumber
         mapData();
      })*/
	   
})
.catch(error => console.log(error));

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
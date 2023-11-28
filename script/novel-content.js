$(document).ready(function(){
      let url = "https://api.jikan.moe/v4/manga/"+pageID+"/full"
  	  async function fetchData(){
  	    const response = await fetch(url);
  	    if(!response.ok){
  	      const error = response.message;
  	      throw new Error(error);
  	    }
  	    const data = await response.json();
  	    return data;
  	  }
  	  
  	  fetchData().then(data => {
  	    
  	    let cover, title, titleEnglish, titleList, statusText, typeText, genreList, synopsisText;
  	    cover = document.getElementById('cover');
  	    title = document.getElementById('title');
  	    titleEnglish = document.getElementById('title-english');
  	    titleList = document.getElementById('titleList');
  	    genreList = document.getElementById('genreList');
  	    statusText = document.getElementById('status');
  	    typeText = document.getElementById('type');
  	    synopsisText = document.getElementById('synopsis');
  	    
  	    let allData = data.data;
  	    cover.src = allData.images.jpg.large_image_url;
  	    title.textContent = allData.title;
  	    titleEnglish.textContent = "("+allData.title_english+")";
  	    
  	    let titleDoc, imageDoc, urlDoc, descriptionDoc;
  	    titleDoc = allData.title;
  	    imageDoc = allData.images.jpg.image_url;
  	    urlDoc = window.location.href;
  	    descriptionDoc = allData.synopsis;
  	    //Page meta
  	    document.title = allData.title;
  	    $("meta[name=title]").attr("content", titleDoc);
      $("meta[property=og\\:title]").attr("content", titleDoc);
      $("meta[name=image]").attr("content", imageDoc);
      $("meta[property=og\\:image]").attr("content", imageDoc);
      $("meta[name=description]").attr("content", descriptionDoc);
      $("meta[property=og\\:description]").attr("content", descriptionDoc);
      /*const url = "https://www.novelpubfile.xyz/?novel=" +titleDoc);
      console.log(url);
      $("meta[name=url]").attr("content", url);*/
      $("meta[property=og\\:url]").attr("content", urlDoc);
  	    
  	    let allTitles = allData.titles;
  	    for(let listTitle in allTitles){
  	      let titleList_item = document.createElement("li");
  	      titleList_item.textContent = allTitles[listTitle].type + ": " +allTitles[listTitle].title;
  	      titleList.appendChild(titleList_item);
  	    }
  	    typeText.textContent = allData.type;
  	    statusText.textContent = allData.status;
  	    let allGenre = allData.genres;
  	    for(let listGenre in allGenre){
  	      let genreList_item = document.createElement("li");
  	      genreList_item.textContent = allGenre[listGenre].name +", ";
  	      genreList.appendChild(genreList_item);
  	    }
  	    
  	    synopsisText.textContent = allData.synopsis;
  	    
  	  }).catch(error => console.log(error));
  });
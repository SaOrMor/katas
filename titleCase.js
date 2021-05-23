let title ="a clash of KINGS";
let minorWords = "Of"


function titleCase(title, minorWords) {
  let array = title.split(" ")
  
  const map1 = array.map(function(currentEl){
    
    
    
    if(currentEl == array[0]) {
      return currentEl.charAt(0).toUpperCase() + currentEl.slice(1).toLowerCase();
    } 

 
    else {
      return currentEl.charAt(0).toUpperCase() + currentEl.slice(1).toLowerCase();
    }

    switch (currentEl) {
      case minorWords: currentEl.toLowerCase()
    }

  })
return map1.join(" ") 
}

titleCase(title, minorWords)
var counter = document.querySelector("#counter");
var addButton = document.querySelector("#add");
var subtractButton = document.querySelector("#subtract");

var count = localStorage.getItem("count");

counter.textContent = count;

addButton.addEventListener("click", function() {
  count++;
  counter.textContent = count;

  localStorage.setItem("count", count);
});

subtractButton.addEventListener("click", function() {
  count--;
  counter.textContent = count;

  localStorage.setItem("count", count);
});


// multi input information. save in local storage. <json> into a string <stingify>  

var myJSON = JSON.stringify

var userString = JSON

// get information out <jSON Parsing> 


localStorage. 

var lastusersting = localStorage 
var lastuser = JSON.parse (lastusersting);


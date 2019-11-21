var splittotalEl = document.querySelector("#split-total")
var splitEl = document.querySelector("split")
var submitEl = document.querySelector("submit")
var numpeople =document.querySelector("num-people")
var newtotal = document.querySelector("new-total")
var tipamount = document.querySelector("tip-amount")
var tippercentage = document.querySelector("tip-percentage")
var total = document.querySelector("total")


function calculateTip(total, tippercentage){
    var roundedResult = (total * tippercentage).toFixed (.2);
    return roundedResult;

}

var addEventListner


function splittotalEl(){
event.preventDefult
}
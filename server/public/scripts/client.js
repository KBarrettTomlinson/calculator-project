var operation = {};

$(document).ready(function(){
  console.log("I'm Here For You.");

  eventListeners();

});//ends document ready

function eventListeners(){
  $('#adds').on("click",function(){
    console.log("Alright, let do some adding!");
  });//ends adds button listener

  $('#subtracts').on("click",function(){
    console.log("Alright, let do some subtracting!");
  });//ends subtracts button listener

  $('#multiplies').on("click",function(){
    console.log("Alright, let do some multiplying!");
  });//ends multiplies button listener

  $('#divides').on("click",function(){
    console.log("Alright, let do some dividing!");
  });//ends divides button listener



}//ends eventListeners function

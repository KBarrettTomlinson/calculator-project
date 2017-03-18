var calculation = {};

$(document).ready(function(){
  console.log("I'm Here For You.");

  eventListeners();

});//ends document ready

function eventListeners(){
  $('#clears').on('click',function(){
    console.log("Alright, let's clean it up!");
    calculation = {};
    console.log("calculation object after clear", calculation);
    $('#output').empty();
    $('input').empty();
    $('.operator').removeClass('highlight');
  });//ends clears button listener

  $('#adds').on("click",function(){
    console.log("Alright, let's do some adding!");
    calculation.operator = "ADD";
    console.log(calculation);
    $('.operator').removeClass('highlight');
    $(this).addClass('highlight');
  });//ends adds button listener

  $('#subtracts').on("click",function(){
    console.log("Alright, let's do some subtracting!");
    calculation.operator = "SUBTRACT";
    console.log(calculation);
    $('.operator').removeClass('highlight');
    $(this).addClass('highlight');
  });//ends subtracts button listener

  $('#multiplies').on("click",function(){
    console.log("Alright, let's do some multiplying!");
    calculation.operator = "MULTIPLY";
    console.log(calculation);
    $('.operator').removeClass('highlight');
    $(this).addClass('highlight');
  });//ends multiplies button listener

  $('#divides').on("click",function(){
    console.log("Alright, let's do some dividing!");
    calculation.operator = "DIVIDE";
    console.log(calculation);
    $('.operator').removeClass('highlight');
    $(this).addClass('highlight');
  });//ends divides button listener

  $('#equals').on('click',function(){
    console.log("It's time to compute!");
    calculation.valueOne = $('#valueOne').val();
    calculation.valueTwo = $('#valueTwo').val();
    console.log("This is the calculation object after retrieving the values", calculation);
  });//ends equals button listener


}//ends eventListeners function

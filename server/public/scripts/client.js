var calculation = {};

$(document).ready(function(){
  console.log("I'm Here For You.");

  eventListeners();

});//ends document ready

function eventListeners(){

  $('#wrapper').on('click','button',function(){
    var buttonType = $(this).data('id');
    var thisObject = $(this);
    buttonActions(buttonType,thisObject);
  });//ends generic listener
}//ends eventListeners function

function buttonActions(buttonType,thisObject){
  switch (buttonType){
    case "clears":
      console.log("Alright, let's clean it up!");
      resetCaluclator();
      break;

    case "adds":
      console.log("Alright, let's do some adding!");
      calculation.operator = "ADD";
      highlightOperator(thisObject);
      break;

    case "subtracts":
      console.log("Alright, let's do some subtracting!");
      calculation.operator = "SUBTRACT";
      highlightOperator(thisObject);
      break;

    case "multiplies":
      console.log("Alright, let's do some multiplying!");
      calculation.operator = "MULTIPLY";
      highlightOperator(thisObject);
      break;

    case "divides":
      console.log("Alright, let's do some dividing!");
      calculation.operator = "DIVIDE";
      highlightOperator(thisObject);
      break;

    case "equals":
      console.log("It's time to compute!");
      calculation.valueOne = $('#valueOne').val();
      calculation.valueTwo = $('#valueTwo').val();
      performCalculation(calculation);
      break;
  }//ends switch
}//ends buttonActions

function highlightOperator(thisObject){
  $('.operator').removeClass('highlight');
  thisObject.addClass('highlight');
}//ends highlightOperator

function performCalculation(object){
  $.ajax({
    type: 'POST',
    url: '/calculator',
    data: object,
    success: function(response){
      console.log("this is the response from the performCalculation post", response);
      updateCalculationDisplay(response);
    }
  });//ends ajax POST
}//ends performCalculation

function resetCaluclator(){
  calculation = {};
  $('#output').empty();
  $('.operator').removeClass('highlight');
  $('#valueOne').val('');
  $('#valueTwo').val('');
}//ends resetCaluclator

function updateCalculationDisplay(object){
  $('#output').append('<span>'+object.valueFinal+'</span>');
}//ends updateCalculationDisplay

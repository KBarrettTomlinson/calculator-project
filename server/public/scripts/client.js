var calculation = {};

$(document).ready(function(){
  console.log("I'm Here For You.");

  eventListeners();

});//ends document ready

function eventListeners(){

  $(this).on('click',function(){
    console.log($(this).data('id'));
    console.log($('#clears').data('id'));
    // var action = $(this).data('id');
  });//ends generic listener

  //
  //
  // $('#clears').on('click',function(){
  //   console.log("Alright, let's clean it up!");
  //   resetCaluclator();
  // });//ends clears button listener
  //
  // $('#adds').on("click",function(){
  //   console.log("Alright, let's do some adding!");
  //   calculation.operator = "ADD";
  //   highlightOperator($(this));
  // });//ends adds button listener
  //
  // $('#subtracts').on("click",function(){
  //   console.log("Alright, let's do some subtracting!");
  //   calculation.operator = "SUBTRACT";
  //   console.log(calculation);
  //   $('.operator').removeClass('highlight');
  //   $(this).addClass('highlight');
  // });//ends subtracts button listener
  //
  // $('#multiplies').on("click",function(){
  //   console.log("Alright, let's do some multiplying!");
  //   calculation.operator = "MULTIPLY";
  //   console.log(calculation);
  //   $('.operator').removeClass('highlight');
  //   $(this).addClass('highlight');
  // });//ends multiplies button listener
  //
  // $('#divides').on("click",function(){
  //   console.log("Alright, let's do some dividing!");
  //   calculation.operator = "DIVIDE";
  //   console.log(calculation);
  //   $('.operator').removeClass('highlight');
  //   $(this).addClass('highlight');
  // });//ends divides button listener
  //
  // $('#equals').on('click',function(){
  //   console.log("It's time to compute!");
  //   calculation.valueOne = $('#valueOne').val();
  //   calculation.valueTwo = $('#valueTwo').val();
  //   console.log("This is the calculation object after retrieving the values", calculation);
  //
  //   performCalculation(calculation);
  // });//ends equals button listener
}//ends eventListeners function

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

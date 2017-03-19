//globals
var calculation = {};
var valueOneString = "";
var valueTwoString = "";
var currentString = valueOneString;
var currentInput = "valueOne";
//document ready
$(document).ready(function(){
  console.log("I'm Here For You.");
  resetCaluclator();
  eventListeners();

});//ends document ready

//functions organized alphabetically
function buttonActions(buttonID, buttonType,thisObject){
  console.log(buttonType,"buttonType");
  console.log(buttonID, "buttonID");

  switch (buttonType){
    case "reset":
      console.log("Alright, let's clean it up!");
      resetCaluclator();
      break;//ends case reset

    case "operator":
      switch(buttonID){
        case "adds":
          console.log("Alright, let's do some adding!");
          calculation.operator = "ADD";
          break;
        case "subtracts":
          console.log("Alright, let's do some subtracting!");
          calculation.operator = "SUBTRACT";
          break;
        case "multiplies":
          console.log("Alright, let's do some multiplying!");
          calculation.operator = "MULTIPLY";
          break;
        case "divides":
          console.log("Alright, let's do some dividing!");
          calculation.operator = "DIVIDE";
          break;
      }//ends operator ID switch
      console.log("inside operator switch thisObject", thisObject);
      highlightOperator(thisObject);
      switchInput();
      setFocus();
      break;//ends case operator

    case "number":
      updateValueString(buttonID);
      updateInputDisplay();
      setFocus();
      break;//ends case number

    case "run":
      console.log("It's time to compute!");
      calculation.valueOne = $('#valueOne').val();
      calculation.valueTwo = $('#valueTwo').val();
      performCalculation(calculation);
      break;//ends case run
    }//ends type switch
}//ends buttonActions

function eventListeners(){
  $('#wrapper').on('click','button',function(){
    var buttonType = $(this).data('type');
    var buttonID = $(this).data('id');
    var thisObject = $(this);
    buttonActions(buttonID, buttonType, thisObject);
  });//ends generic listener
}//ends eventListeners function

function highlightOperator(thisObject){
  $('.operator').removeClass('highlight');
  $('.tenKey').removeClass('highlight');
  thisObject.addClass('highlight');
}//ends highlightOperator

function performCalculation(object){
  var x = parseInt(object.valueOne);
  var y = parseInt(object.valueTwo);
  console.log("inside performCalculation", object);
  if (isNaN(x) || isNaN(y)){
    object.valueFinal = ("Something is wrong, resetting...");
    console.log("before update");
    updateCalculationDisplay(object);
    console.log("before reset");
    setTimeout(function(){console.log("setTimeout");},10000);
    resetCaluclator();
    return;
  }//ends if
  $.ajax({
    type: 'POST',
    url: '/calculator',
    data: object,
    success: function(response){
      console.log("this is the response from the performCalculation post", response);
      updateCalculationDisplay(response);
    }
  });//ends ajax POST
  $('button').prop('disabled',true);
  $('button#clearsBanner').prop('disabled',false);
  $('button#clearsTenKey').prop('disabled',false);
}//ends performCalculation

function resetCaluclator(){
  calculation = {};
  $('#output').empty();
  $('.operator').removeClass('highlight');
  $('.tenKey').removeClass('highlight');
  $('#valueOne').val('');
  $('#valueTwo').val('');
  currentInput = "valueOne";
  currentString = valueOneString;
  valueOneString = "";
  valueTwoString= "";
  setFocus();
  $('button').prop('disabled',false);
}//ends resetCaluclator

function setFocus(){
    $('#'+currentInput).focus();
}//ends setFocus

function switchInput(){
  currentInput = "valueTwo";
  currentString = valueTwoString;
}//ends toggleInputArray

function updateCalculationDisplay(object){
  $('#output').append('<span>'+object.valueFinal+'</span>');
}//ends updateCalculationDisplay

function updateInputDisplay(){
  console.log(currentString);
  $('#'+currentInput).val(currentString);
}//ends updateInputDisplay

function updateValueString(char){
  currentString = $('#'+currentInput).val();
  console.log(char);
  console.log(currentString);
  char = char.toString();
  currentString += char;
  console.log(currentString);
}//ends updateValueString

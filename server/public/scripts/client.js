//globals
var calculation = {};
var valueOneString = "";
var valueTwoString = "";
var currentString = valueOneString;
var currentInput = "valueOne";
//document ready
$(document).ready(function(){
  console.log("I'm Here For You.");
  eventListeners();

});//ends document ready

//functions organized alphabetically
function buttonActions(buttonType,thisObject){
  console.log(buttonType,"buttonType");
  switch (buttonType){
    case "clears":
      console.log("Alright, let's clean it up!");
      resetCaluclator();
      break;

    case "adds":
      console.log("Alright, let's do some adding!");
      calculation.operator = "ADD";
      highlightOperator(thisObject);
      switchInput();
      break;

    case "subtracts":
      console.log("Alright, let's do some subtracting!");
      calculation.operator = "SUBTRACT";
      highlightOperator(thisObject);
      switchInput();
      break;

    case "multiplies":
      console.log("Alright, let's do some multiplying!");
      calculation.operator = "MULTIPLY";
      highlightOperator(thisObject);
      switchInput();
      break;

    case "divides":
      console.log("Alright, let's do some dividing!");
      calculation.operator = "DIVIDE";
      highlightOperator(thisObject);
      switchInput();
      break;

    case "equals":
      console.log("It's time to compute!");
      calculation.valueOne = $('#valueOne').val();
      calculation.valueTwo = $('#valueTwo').val();
      performCalculation(calculation);
      break;

    case 1:
      console.log("1");
      updateValueString(buttonType);
      updateInputDisplay();
      break;

    case 2:
      console.log("2");
      updateValueString(buttonType);
      updateInputDisplay();
      break;

    case 3:
      console.log("3");
      updateValueString(buttonType);
      updateInputDisplay();
      break;

    case 4:
      console.log("4");
      updateValueString(buttonType);
      updateInputDisplay();
      break;

    case 5:
      console.log("5");
      updateValueString(buttonType);
      updateInputDisplay();
      break;

    case 6:
      console.log("6");
      updateValueString(buttonType);
      updateInputDisplay();
      break;

    case 7:
      console.log("7");
      updateValueString(buttonType);
      updateInputDisplay();
      break;

    case 8:
      console.log("8");
      updateValueString(buttonType);
      updateInputDisplay();
      break;

    case 9:
      console.log("9");
      updateValueString(buttonType);
      updateInputDisplay();
      break;

    case 0:
      console.log("0");
      updateValueString(buttonType);
      updateInputDisplay();
      break;
  }//ends switch
}//ends buttonActions

function eventListeners(){
  $('#wrapper').on('click','button',function(){
    var buttonType = $(this).data('id');
    var thisObject = $(this);
    buttonActions(buttonType,thisObject);
  });//ends generic listener
}//ends eventListeners function

function highlightOperator(thisObject){
  $('.operator').removeClass('highlight');
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
}//ends performCalculation

function resetCaluclator(){
  calculation = {};
  $('#output').empty();
  $('.operator').removeClass('highlight');
  $('#valueOne').val('');
  $('#valueTwo').val('');
  currentInput = "valueOne";
  currentString = valueOneString;
  valueOneString = "";
  valueTwoString= "";
}//ends resetCaluclator

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
  console.log(char);
  console.log(currentString);
  char = char.toString();
  currentString += char;
  console.log(currentString);
}//ends updateValueString

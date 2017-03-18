//requires
var express = require('express');
var path = require('path');
var calculation = {};

//globals
var router = express.Router();

//posts
router.post('/',function(req,res){
  console.log("inside the calculator / post");
  calculation = req.body;
  console.log("calculation", calculation);
  var x = parseInt(calculation.valueOne);
  console.log(x);
  var y = parseInt(calculation.valueTwo);
  console.log(y);
  var operation = (calculation.operator);
  var z = 0;
  console.log(z);
  console.log("this is the calculation we are performing",x, operation, y);
  switch (operation){
    case "ADD":
      z = x + y;
      break;
    case "SUBTRACT":
      z = x - y;
      break;
    case "MULTIPLY":
      z = x * y;
      break;
    case "DIVIDE":
      if (y !== 0) {
        z = x / y;
      } else {
        z = "You Cannot Divide by Zero";
      }
      break;
    default:
      z = "Something has gone horribly wrong";
      break;
  }//ends switch statement
  calculation.valueFinal = z;
  console.log("this is the object we are going to send back", calculation);
  res.send(calculation);
});//ends / post


//exports
module.exports = router;

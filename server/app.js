//requires - makes all of these available to app.js for use
var express = require('express'); //uses installed express
var bodyParser = require('body-parser'); //uses installed body parser
var path = require('path'); //uses avaliable path
var index = require('./modules/index.js'); //index module
var calculator = require('./modules/calculator.js'); //calculator module
var error = require('./modules/error.js');//error module

//globals - variables for use in app.js
var app = express(); //sets var app to the object returned by the function express();
var port = 5000; //sets up a port connection so that everything can communitcate

//uses
// app.use( bodyParser.urlencoded( {extended: true}));//body-parser middleware
// app.use( express.static ('server/public')); //static sets up root folder
// app.use( '/', index ); //index is returned for get at '/' which is fired off when browser loads
// app.use( '/calculator', calculator); //caluculator sends get and post requests to be caluclated at the calculator module
// app.use( '/*', error );//catch all error for requests

//listening
app.listen( port, function(){
  console.log("I'm listening for  you on port:",port);
});//ends listening

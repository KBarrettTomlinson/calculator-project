//requires
var express = require('express');
var path = require('path');

//globals
var router = express.Router();

//gets
router.get( '/', function (req,res){
  console.log("get request for '/' sending back index.html");
  res.sendFile(path.resolve('server/public/views/index.html'));// sends file as response
});//end get index.html

//exports
module.exports = router;

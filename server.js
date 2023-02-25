var express = require('express');
var body_parser = require('body-parser');
const app=require('./app');
url="http://localhost:8000/";
var port = 8000;
app.use(body_parser.json());
app.listen(port, function(){
  console.log('Server Active on', port);
});
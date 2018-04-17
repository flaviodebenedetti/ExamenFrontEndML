/**
 * Module dependencies.
 */
var express = require('express');
var http = require('http');
var app = express();
var bodyParser = require('body-parser');

// Configuration
// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({'extended':'true'}));
// parse application/json
app.use(bodyParser.json());

// Start server
app.listen(8080, function(){
  console.log("Express server listening port 8080");
});
// Cargo la pantalla inicial (Caja de busqueda)
app.get('*', function(req, res) {
  res.sendfile('./public/inicio.html');
});
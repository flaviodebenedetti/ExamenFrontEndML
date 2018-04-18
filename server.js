/**
 * Module dependencies.
 */
var express = require('express');
var app = express();
/* var request = require('request');
var async = require('async');
var http = require('http'); */

/* app.get('/:descripcion', function(request, response){
	var req = {
		method : 'POST',
		url : 'https://api.mercadolibre.com/items/:' + request.params.descripcion,
		headers : {
			'Content-Type' : 'application/x-www-form-urlencoded; charset=ISO-8859-1'
		},
		dataType: "json"
	}

	$http(req).then(function(response) {
		onSuccess(response);
	}, function(errorResponse){
		onError(errorResponse);
	});
});

app.post('/hola', function(request, response){
    response.send('HOLA FORRO');
}); */

//Agrega toda la carpeta public al inicio.html
//app.use(express.static('public'));

app.get('/', function (req, res) {
   res.send('Hello World!');
});

app.use(express.static('public'));

// Start server
app.listen(8080, function(){
    console.log("Express server listening port 8080");
});

/**
 * Module dependencies.
 */
var express = require('express');
var app = express();
var http = require('http');
var request = require('request');
var cors = require('cors');

app.use(cors());
app.use(express.static('public/testML'));

function getItem(id, callback){
	//Paso 1 - seteamos el headers
	var headers = {
		'Content-Type': 'application/x-www-form-urlencoded; charset=ISO-8859-1'
	}
	//Paso 2 - configuramos el request
	var options = {
		url     :  'https://api.mercadolibre.com/items/' + id,
		method  : 'GET',
		headers : headers
	}
	//Paso 3 - hacemos el llamado a la api
	request(options, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			callback(body);
		}
	});
}
//Cambiar por buscarPorId
app.post('/getItem/:id', function (req, res) {
	getItem(req.params.id, function(response){
		res.send(response);
	})
});

function getItemsPorDescripcion(descripcion, callback){
	console.log("--- seteamos el headers ---");
	//Paso 1 - seteamos el headers
	var headers = {
		'Content-Type': 'application/x-www-form-urlencoded; charset=ISO-8859-1'
	}
	console.log("--- configuramos el request ---");
	//Paso 2 - configuramos el request
	var options = {
		url     :  'http://api.mercadolibre.com/sites/MLA/search?q=:'+ descripcion + '&limit=4',
		method  : 'GET',
		headers : headers
	}
	console.log("--- hacemos el llamado a la api ---");
	//Paso 3 - hacemos el llamado a la api
	request(options, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			callback(body);
		}
	});
}

app.post('/getItemsPorDescripcion/:descripcion', function (req, res) {
	console.log("--- Post ---");
	getItemsPorDescripcion(req.params.descripcion, function(response){
		res.send(response);
	})
});

app.get('/', function(req, res){
	res.sendfile('./public/testML/inicio.html');
});

// Start server
app.listen(8081, function(){
    console.log("Listening on port 8081");
});

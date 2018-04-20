/**
 * Module dependencies.
 */
var express = require('express');
var app = express();
var http = require('http');
var request = require('request');

app.use(express.static('public'));

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
app.get('/inicio.html/:id', function (req, res) {
	getItem(req.params.id, function(response){
		res.send(response);
	})
});

function getItemsPorDescripcion(descripcion, callback){
	//Paso 1 - seteamos el headers
	var headers = {
		'Content-Type': 'application/x-www-form-urlencoded; charset=ISO-8859-1'
	}
	//Paso 2 - configuramos el request
	var options = {
		url     :  'http://api.mercadolibre.com/sites/MLA/search?q=:'+ descripcion + '&limit=4',
		method  : 'GET',
		headers : headers
	}
	//Paso 3 - hacemos el llamado a la api
	request(options, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			console.log('************************************************************');
			console.log(body);
			console.log('************************************************************');
			callback(body);
		}
	});
}

app.get('/inicio.html?descripcion=:descripcion', function (req, res) {
	getItemsPorDescripcion(req.params.descripcion, function(response){
		res.send(response);
	})
});

app.get('*', function(req, res){
	res.sendfile('./public/inicio.html');
})

// Start server
app.listen(3001, function(){
    console.log("Listening on port 3001");
});

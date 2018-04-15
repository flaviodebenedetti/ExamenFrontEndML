// se importan las dependencias de express
var express 	= require('express');
var app 		= express();
var mongoose 	= require('mongoose');

// Conexión con la base de datos
mongoose.connect('mongodb://localhost:27017/ExamenFrontEndML');

// Configuración
/* app.configure(function() {
	// Localización de los ficheros estáticos
	app.use(express.static(__dirname + '/public'));
	// Muestra un log de todos los request en la consola		
	app.use(express.logger('dev'));	
	// Permite cambiar el HTML con el método POST					
	app.use(express.bodyParser());
	// Simula DELETE y PUT						
	app.use(express.methodOverride());					
}); */

// Rutas de nuestro API
// GET de todos los TODOs
app.get('/api/models', function(req, res) {				
	Todo.find(function(err, todos) {
		if(err) {
			res.send(err);
		}
		res.json(todos);
	});
});

// POST que crea un TODO y devuelve todos tras la creación
app.post('/api/models', function(req, res) {				
	Todo.create({
		text: req.body.text,
		done: false
	}, function(err, todo){
		if(err) {
			res.send(err);
		}
		Todo.find(function(err, todos) {
			if(err){
				res.send(err);
			}
			res.json(todos);
		});
	});
});

app.get('*', function(req, res) {						
	res.sendfile('./inicio.html');				
});

// Escucha en el puerto 8080 y corre el server
app.listen(8080, function() {
    console.log('App listening on port 8080');
});

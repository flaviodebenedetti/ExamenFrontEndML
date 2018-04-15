// se importan las dependencias de express
var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
// permitimos parsear objetos json
app.use(bodyParser.json());
// nos permite implementar y personalizar metodos HTTP
app.use(methodOverride());

var router = express.Router();

router.get('/', function(req, res) {
   res.send("Acá estamos :D");
});

app.use(router);

app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});
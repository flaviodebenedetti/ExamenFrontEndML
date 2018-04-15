// Dependencies
var express = require('express');
var router = express.Router();

//Producto
var Product = require('../models/producto');
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/products');

// Return router
module.exports = router;
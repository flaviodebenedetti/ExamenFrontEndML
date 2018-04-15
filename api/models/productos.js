var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var productosSchema = new Schema({
  "autor":{ 
      "": "",
      "": ""
    },
    "categories":[],
    "items":[{
        "id":"",
        "title": "",
        "price":{
            "currency":"",
            "amount":"",
            "decimals":""
        },
        "picture":"",
        "condition":"true",
        "free_shipping":""
    }]
});

module.exports = mongoose.model('Productos', productosSchema);
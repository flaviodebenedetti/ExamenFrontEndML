app.service('Servidor', [ '$http', "$location", '$routeParams', '$rootScope', 'ConfigService', function($http,$location, $routeParams,$rootScope, ConfigService) {

    var arrayProductos = {};

    this.setArrayProductos = function(datos){
		arrayProductos = datos;
	};

	this.getArrayProductos = function(){
		return arrayProductos;
	};

    this.consultarTodosLosProductos = function(onSuccess, onError){
		var req = {
				method : 'POST',
				url : 'http://api.mercadolibre.com/sites/MLA/search?q=:query' + '&limit=4',
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
	}

    this.getProductoPorId = function(producto, onSuccess, onError){
        var req = {
            method : 'POST',
            url : 'http://localhost:8089/buscarPorId/' + producto.id,
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
    }

    this.getProductoPorDescripcion = function(producto, onSuccess, onError){
        var req = {
            method : 'POST',
            url : 'https://api.mercadolibre.com/items/:' + producto.id + '/'+producto.descripcion,
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
    }

}]);
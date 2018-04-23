app.service('Servidor', [ '$http', "$location", '$routeParams', '$rootScope', function($http, $location, $routeParams, $rootScope) {

    var products = {};
    var productSelected;

    this.setProducts = function(datos){
		products = datos;
	};

    this.getProducts = function(){
		return products;
    };
    
    this.setProductSelected = function(datos){
		productSelected = datos;
	};

    this.getProductSelected = function(){
		return productSelected;
    };

    this.getProductoPorId = function(id, onSuccess, onError){
        var req = {
            method : 'POST',
            url : 'http://localhost:8080/getItem/' + id,
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

    this.getProductoPorDescripcion = function(descripcion, onSuccess, onError){
        var req = {
            method : 'POST',
            url : 'http://localhost:8080/getItemsPorDescripcion/'+ descripcion,
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
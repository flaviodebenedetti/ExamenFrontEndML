app.controller('BusquedaController', ['$scope', 'Servidor', '$http', '$location', '$rootScope', function ($scope, Servidor, $http, $location, $rootScope) {

    $scope.init = function(){
        $scope.products = Servidor.getProducts();
        //$scope.product = $scope.products[0];
        //$scope.cargarImagen();
    }

    $scope.cargarImagen = function(){
        
    }

    $scope.detalle = function(id){
        Servidor.getProductoPorId(id, function(response){
            Servidor.setProductSelected(response.data);
            $location.path("/detalle");
        }, function(errorResponse){
            console.log("Error al consultar");
        });

    }

    $scope.init();

}]);

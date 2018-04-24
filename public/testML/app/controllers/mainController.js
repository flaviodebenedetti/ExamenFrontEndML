app.controller('MainController', ['$http', '$scope', '$location', 'Servidor', '$rootScope', function ($http, $scope, $location, Servidor, $rootScope) {
    
    $scope.buscar = function(){
        if($scope.descripcion){
            Servidor.getProductoPorDescripcion($scope.descripcion, function(response){
                Servidor.setProducts(response.data.results);
                $location.path("/busqueda");
            }, function(errorResponse){
                console.log("Error al consultar");
            });
        }
    }
}]);
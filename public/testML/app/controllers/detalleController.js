app.controller('DetalleController', ['$scope', 'Servidor', '$http', '$location', '$rootScope', function ($scope, Servidor, $http, $location, $rootScope) {
    
    $scope.init = function(){
        $scope.product = Servidor.getProductSelected();
    }
    
    $scope.init();

}]);

app.controller('DetalleController', ['$scope', 'Servidor', '$http', '$location', '$rootScope', function ($scope, Servidor, $http, $location, $rootScope) {
    
    $scope.init = function(){
        $scope.product = Servidor.getProductSelected();

		$scope.product.base_price = ('$ ' +currencyFormatInt(parseInt($scope.product.base_price)));
    
        $scope.attributes = $scope.product.attributes;
    }
    
    $scope.init();

}]);

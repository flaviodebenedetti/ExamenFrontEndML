// Inicia la aplicacion
var app = angular.module('testML', [
  'ngRoute',           // Directiva para usar RouteProvider
  'ngSanitize',        // Directiva para interpretar correctamente resultados json
]);

app.config(['$routeProvider', '$httpProvider', '$locationProvider', function($routeProvider, $httpProvider, $locationProvider) {
	$routeProvider.when('/busqueda',{
        templateUrl: '/testML/views/busqueda.html',
        controller: 'BusquedaController'
    }).when('/detalle',{
    templateUrl: '/testML/views/detalle.html',
    controller: 'DetalleController'
	}).otherwise({
		redirectTo: '/'
    });
}]);
// Inicia la aplicacion
var app = angular.module('testML', [
  'ngRoute',           // Directiva para usar RouteProvider
  'ngSanitize'        // Directiva para interpretar correctamente resultados json
]);

app.config(['$routeProvider', '$httpProvider', '$locationProvider', function($routeProvider, $httpProvider, $locationProvider) {
	$routeProvider.when('/',{
    templateUrl: '/views/busqueda.html',
    controller: 'BusquedaController'
	}).when('/items/:id',{
    templateUrl: '/views/detalle.html',
    controller: 'DetalleController'
	}).otherwise({
		redirectTo: '/'
	});

  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode(true);
}]);

app.run(['$rootScope', '$location', '$routeParams', '$window', 'Servidor', function($rootScope, $location, $routeParams, $window, Servidor) {

	$rootScope.$on('$routeChangeStart', function(e, next, cur){
    console.log("rootScoope on...");
	});

  $rootScope.$on('$locationChangeSuccess', function(e, next, cur) {
    console.log('locationChangeSuccess...');
  });

}]);
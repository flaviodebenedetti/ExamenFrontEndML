// Inicia la aplicacion
var app = angular.module('testML', [
  'ngRoute',           // Directiva para usar RouteProvider
  'ngSanitize',        // Directiva para interpretar correctamente resultados json
]);

app.config(['$routeProvider', '$httpProvider', '$locationProvider', function($routeProvider, $httpProvider, $locationProvider) {
	$routeProvider.when('/busqueda',{
      templateUrl: '/public/testML/views/busqueda.html',
      controller: 'BusquedaController'
    }).when('/detalle',{
      templateUrl: '/public/testML/views/detalle.html',
      controller: 'DetalleController'
	  }).otherwise({
		  redirectTo: '/'
    });
    
    // Por cada promise se muestra o no un gif de carga
    $httpProvider.interceptors.push(function($q, $rootScope) {
			return {
				'request': function(req){
					showSpinner();
					return req;
				},
				'response': function(res){
					hideSpinner();
					return res;
        }
      };
    });

}]);
// Inicia la aplicacion
var app = angular.module('testML', [
  'ngRoute',           // Directiva para usar RouteProvider
  'ngSanitize'        // Directiva para interpretar correctamente resultados json
]);

app.config(['$routeProvider', '$httpProvider', '$locationProvider', function($routeProvider, $httpProvider, $locationProvider) {
	$routeProvider.when('/',{
		templateUrl: '../inicio.html',
    controller: 'BusquedaController'
	}).when('/items?search=',{
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
  //$httpProvider.interceptors.push('httpResponseErrorInterceptor');
}]);

 // create the controller and inject Angular's $scope
app.controller('BusquedaController', function($scope) {
    console.log("Cargo bien");
    $scope.buscar = function(){
      debugger;
      $scope.descripcion;
    }
});

app.controller('DetalleController', function($scope) {
  $scope.message = 'Hi! This is the about page.';
});

/* app.factory('httpResponseErrorInterceptor', ['$injector', '$q', '$timeout', function($injector, $q, $timeout) {
	return {
		'request': function(req){
			blurBackground();
			return req;
		},
		'response': function(res){
			unBlurBackground();

			//Una sola vez carga con el texto predefinido (cargando el sitio)
			$("#leyendaLogoWait").html("<p>Aguard&aacute; unos instantes mientras validamos tus datos...</p>");
			return res;
		},
		'responseError': function(response) {
			unBlurBackground();
			var retryDelay = (typeof response.config.retryDelay === 'undefined' ? 0 : response.config.retryDelay);
			response.config.retries = (typeof response.config.retries === 'undefined' ? 1 : response.config.retries);
			response.config.retries--;

			if (response.status === 0 && response.config.retries > 0) {
				return $timeout(function() {
					var $http = $injector.get('$http');
					return $http(response.config);
		        }, retryDelay);
			}
			return $q.reject(response);
		}
	};
}]); */
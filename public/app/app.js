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
  $httpProvider.interceptors.push('httpResponseErrorInterceptor');
}]);

app.factory('httpResponseErrorInterceptor', ['$injector', '$q', '$timeout', function($injector, $q, $timeout) {
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
}]);
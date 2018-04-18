// Inicia la aplicacion
var app = angular.module('testML', [
  'ngRoute',           // Directiva para usar RouteProvider
  'ngResource',        // Directiva para acceso a servicios Rest con Resourse
  'ngSanitize',        // Directiva para interpretar correctamente resultados json
  'appControllers',    // controllers
]);

/**
* Usamos este modulo para cargar los Controllers desde otros archivos JS
*/
var appControllers = angular.module('appControllers', []);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

  $locationProvider.hashPrefix('!');

    $routeProvider.
      when('/', {
        templateUrl: '../inicio.html',
        controller: 'BusquedaController'
      }).
      when('/items?search=', {
        templateUrl: '/views/busqueda.html',
        controller: 'BusquedaController'
      }).
      when('/items/:id', {
        templateUrl: '/views/detalle.html',
        controller: 'DetalleController'
      })
      .otherwise({
        redirectTo: '/'
      });
}]);
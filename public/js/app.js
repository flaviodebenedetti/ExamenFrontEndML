var app = angular.module('examenFrontEndML', ['ngRoute']);
debugger;
app.config(['$routeProvider',
	function ($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'public/inicio.html',
        controller: mainController
      }).
      when('/items?search=', {
        templateUrl: 'public/views/busqueda.html',
        controller: BusquedaController
      }).
      when('/items/:id', {
        templateUrl: 'public/views/detalle.html',
        controller: DetalleController
      })
      .otherwise({
        redirectTo: '/'
      });
}]);
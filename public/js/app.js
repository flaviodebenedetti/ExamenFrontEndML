'use strict';

angular.module('examenFrontEndML', ['examenFrontEndML.services']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/index',
        controller: IndexCtrl
      }).
      when('/items?search=', {
        templateUrl: 'views/busqueda',
        controller: BusquedaController
      }).
      when('/items/:id', {
        templateUrl: 'views/detalle',
        controller: DetalleController
      }).
      otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
}]);
angular.module('examenFrontEndML', []);

function mainController($scope, $http) {
	$scope.formData = {};

	// Cuando se cargue la página, pide del API todos los TODOs
    $http.get('/api/models')
		.success(function(data) {
			$scope.todos = data;
			console.log(data)
		})
	    .error(function(data) {
			console.log('Error: ' + data);
        });
}
app.controller('ProductosController', function($scope, Producto, ngProgress, toaster) {

    $scope.producto = new Producto();
    
    var refresh = function() {
      $scope.producto = Producto.query(); 
      $scope.producto ="";
    }
    refresh();
    
    $scope.add = function(product) {
        Producto.save(producto,function(producto){
        refresh();
      });
    };
    
    $scope.update = function(producto) {
        producto.$update(function(){
        refresh();
      });
    };
    
    $scope.remove = function(producto) {
        producto.$delete(function(){
        refresh();
      });
    };
    
    $scope.edit = function(id) {
      $scope.producto = Producto.get({ id: id });
    };  
    
    $scope.deselect = function() {
      $scope.producto = "";
    }
    
})
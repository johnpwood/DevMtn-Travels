angular.module('devmtnTravel').controller('bookedCtrl', function($scope, $stateParams, mainSrv, ){

  $scope.trip = mainSrv.packageInfo.filter(function(x){return x.id == $stateParams.id})[0];

});

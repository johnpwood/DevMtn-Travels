angular.module('devmtnTravel').controller('packagesCtrl', function($scope, $stateParams, mainSrv){
  $scope.packages = mainSrv.packageInfo.filter(function(x){return x.country===$stateParams.country});
});

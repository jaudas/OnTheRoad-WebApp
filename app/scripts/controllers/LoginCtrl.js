OTR.controller("LoginCtrl", function($scope, $http){

$http.post('localhost:8080//login',{'mail' : $scope.mail,'password' : $scope.password})
           .success(function(data) {
                $scope.feedBack=data;   
          })
          .error(function(data) {
           $scope.feedBack= "Une erreur est survenue";
          });


});
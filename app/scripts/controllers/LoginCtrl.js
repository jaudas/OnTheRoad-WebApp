OTR.controller("LoginCtrl", function($scope, $http){

	var SERVEUR_URL = "http://193.50.54.5:8080/API_OnTheRoad_Spring-0.0.1-SNAPSHOT/login";

$http.post(SERVEUR_URL,{'mail' : $scope.mail,'password' : $scope.password})
           .success(function(data) {
                $scope.offers=data;
                $scope.status=status;
                $scope.isLoading = false; 

          })
          .error(function(data) {
           $scope.feedBack= "Une erreur est survenue";
          });




	

});
OTR.controller("ManageOffersCtrl", function($scope, $http){

	var SERVEUR_URL = "";
	var MOCK_URL = "mockup.json" 

	$scope.offers = [];
	$scope.isLoading = false;


	//Fonction permettant de récupérer les offres dans la base de données
	function getOffers()
	{
		console.info("getting offers");
		$scope.isLoading =true;
		$http.get(MOCK_URL)
		.success(function(data,status)
		{
			$scope.offers=data;
			$scope.status=status;
			$scope.isLoading = false;
		})
		.error(function(data,status)
		{
			$scope.offers=data;
			console.error('unable to load offers'+ status);
			$scope.isLoading = false;
		})
	}


	getOffers();


});
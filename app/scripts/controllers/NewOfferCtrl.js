OTR.controller("NewOfferCtrl", function($scope, $http){

	var MOCK_URL = "mockup.json" 

	$scope.POI = [];
	$scope.isLoading = false;
	
	function getPOI()
	{
		console.info("getting POI");
		$scope.isLoading = true;
		$http.get(MOCK_URL)
		.success(function(data,status)
		{
			$scope.POI = data;
			$scope.status = status;
			$scope.isLoading = false;
		})
		.error(function(data,status)
		{
			$scope.POI = data;
			console.error('unable to load POI'+ status);
			$scope.isLoading = false;
		})
	}
	getPOI();
});
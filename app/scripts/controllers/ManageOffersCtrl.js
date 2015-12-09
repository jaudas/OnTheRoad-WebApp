OTR.controller("ManageOffersCtrl", function($scope, $http){

	var SERVEUR_URL = "";
	var MOCK_URL = "mockup.json" 

	$scope.offers = [];
	$scope.isLoading = false;


	//Initialisation de la carte et des markers
	$scope.map = {
		center: { 
			latitude: 48.853, 
			longitude: 2.35 
		},
		zoom: 8,
		options: function() {
			return {
				streetViewControl: false,
				disableDoubleClickZoom:true,
				draggableCursor:'move',
				draggingCursor:'auto',
				keyboardShortcuts:false,
			}
		}

	};

	$scope.markers = [];



	/*$scope.points = {
		coords :[],
		options: function(coords, properties, i, map) {
			return {
				draggable: false
			}
		},
		events: {
			click: function(e, point, map, points) {
				alert(point)
			}
		},
		decimals: 3
	};*/



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


		/*	for (var iter = 0; iter < data.POI.length; iter++) {

				markers.push(
					{
						data.POI[iter].id,
						{
					        latitude: data.POI[iter].latitude,
					        longitude: data.POI[iter].longitude
					    }
					});
				

			}
			console.info($scope.markers);*/

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
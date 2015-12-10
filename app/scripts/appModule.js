var OTR = angular.module('OTR', ['ngRoute','ngResource', 'uiGmapgoogle-maps']);

OTR.config(function ($routeProvider) {
    //Cette config permet de  diriger le ng-view entre les pages
    //Permet également de déclarer le controller associé
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/main.html', 
        controller: ''
      })
      .when('/signup', {
        templateUrl: 'app/views/signup.html#signup',
        controller: 'SignupCtrl'
      })
      .when('/login', {
        templateUrl: 'app/views/login.html#login',
        controller: 'LoginCtrl'
      })
      .when('/terms-of-service',{
        templateUrl : 'app/views/terms-of-service.html#TOS',
        controller : ''
      })
      .when('/blog',{
        templateUrl : 'app/views/blog.html#blog',
        controller : ''
      })
      .when('/manage-offers',{
        templateUrl : 'app/views/manage-offers.html#manage-offers',
        controller : 'ManageOffersCtrl'
      })
      .when('/new-offer',{
        templateUrl : 'app/views/new-offer.html#new-offer',
        controller : 'NewOfferCtrl'
      })
	    .when('/new-POI',{
        templateUrl : 'app/views/new-POI.html#new-POI',
        controller : 'NewPOICtrl'
      })
      .when('/myaccount',{
            templateUrl : 'app/views/my-account.html#account',
            controller : 'MyAccountCtrl'
          })
      .otherwise({
        templateUrl: 'app/views/404.html#404',
      });
});



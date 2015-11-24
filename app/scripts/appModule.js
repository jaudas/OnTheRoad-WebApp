var OTR = angular.module('OTR', ['ngRoute']);

OTR.config(function ($routeProvider) {
    //Cette config permet de  diriger le ng-view entre les pages
    //Permet également de déclarer le controller associé
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/main.html', 
        controller: ''
      })
      .when('/signup', {
        templateUrl: 'app/views/signup.html',
        controller: 'SignupCtrl'
      })
      .when('/login', {
        templateUrl: 'app/views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/terms-of-service',{
        templateUrl : 'app/views/terms-of-service.html',
        controller : ''
      })
      .when('/blog',{
        templateUrl : 'app/views/blog.html',
        controller : ''
      })
      .otherwise({ //page d'erreur sympatique
        templateUrl: 'app/views/404.html',
      });
});

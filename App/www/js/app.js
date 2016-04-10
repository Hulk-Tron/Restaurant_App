// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('Rest', ['ionic','firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
  })
 .config(function($stateProvider,$urlRouterProvider){
    $stateProvider
      .state("home",{
        url : "/home",
        templateUrl : "templates/home.html",
        controller : "homeCtrl"
    })
      .state("login",{
        url : "/login",
        templateUrl : "templates/login.html",
        controller : "loginCtrl"
      })
      .state("menu",{
        url : "/menu",
        templateUrl : "templates/menu.html",
        controller : "menuCtrl"
      })
      .state("name",{
        url : "/name",
        templateUrl : "templates/name.html",
        controller : "nameCtrl"
      })
      .state("order",{
        url : "/order",
        templateUrl : "templates/order.html",
        controller : "orderCtrl"
      })
      .state("detail",{
        url : "/detail",
        templateUrl : "templates/detail.html",
        controller : "detailCtrl"
      })
      .state("signup",{
        url : "/signup",
        templateUrl : "templates/signup.html",
        controller : "signupCtrl"
      });


      $urlRouterProvider.otherwise("/home");
   });

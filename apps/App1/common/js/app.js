var myApp = angular.module('starter', ['ionic','blank.controllers','blank.services']);
 
myApp.run(function($ionicPlatform) {
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
});
 
myApp.config(function($stateProvider, $urlRouterProvider) {
 
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  
    .state('tabs', {
      url: '/tabs',
      templateUrl: 'templates/tabs.html'
    })
    .state('tabs.home', {
	  url: '/home',
	  views: {
		  'home-tab': {
              templateUrl: 'templates/home.html'
          }
	  }
    })
    .state('tabs.branch', {
    	url: '/home/:aId',
    	views: {
    		'home-tab': {
    			templateUrl: 'templates/branch.html',
    			controller: 'branchCtrl'
    		}
    	}
    })
  
 
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tabs/home');
 
});
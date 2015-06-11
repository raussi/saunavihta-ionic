angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'/*, 'ngCordova'*/])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  .state('tab.saunavihta', {
    url: '/saunavihta',
    views: {
      'tab-saunavihta': {
        templateUrl: 'templates/tab-saunavihta.html',
        controller: 'SaunavihtaCtrl'
      }
    }
  })

  .state('tab.loyly', {
      url: '/loyly',
      views: {
        'tab-loyly': {
          templateUrl: 'templates/tab-loyly.html',
          controller: 'LoylyCtrl'
        }
      }
    })
    
  .state('tab.virvoke', {
    url: '/virvoke',
    views: {
      'tab-virvoke': {
        templateUrl: 'templates/tab-virvoke.html',
        controller: 'VirvokeCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise('/tab/saunavihta');

});

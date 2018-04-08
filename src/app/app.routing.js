(function () {
  var app = angular.module('desafio'),

    states = {
      homeState: {
        name: 'home',
        url: '/home',
        templateUrl: './src/app/components/pages/home/home.controller.html',
        controller: 'HomeController'
      },

      styleguideState: {
        name: 'styleguide',
        url: '/styleguide',
        templateUrl: './src/app/components/pages/styleguide/styleguide.page.html'
      }
    },

    routerConfiguration = ['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state(states.homeState)
        .state(states.styleguideState);

      $urlRouterProvider.otherwise('/styleguide');
    }];

  app.config(routerConfiguration);
})();

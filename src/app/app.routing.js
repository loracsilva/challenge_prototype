(function () {
  var app = angular.module('desafio'),

    states = {

      styleguideState: {
        name: 'styleguide',
        url: '/styleguide',
        templateUrl: './src/app/components/pages/styleguide/styleguide.page.html'
      }
    },

    routerConfiguration = ['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state(states.styleguideState);

      $urlRouterProvider.otherwise('/styleguide');
    }];

  app.config(routerConfiguration);
})();

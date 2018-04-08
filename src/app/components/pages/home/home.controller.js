(function() {
  HomeController.$inject = ['$scope']

  function HomeController(scope) {
    scope.title = 'Desafio Fortes';

    scope.showMessage = function(msg) {
      alert(msg);
    };
  }

  angular.module('pages')
    .controller('HomeController', HomeController);
})();

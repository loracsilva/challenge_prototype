(function () {
  angular.module('baza.atoms')
    .directive('bazaButton', bazaButton);

  function bazaButton() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        click: '&',
        icon: '@',
        state: '@'
      },
      templateUrl: function (elem, attrs) {
        var path = './src/app/components/atoms/baza-button/';

        if (attrs.type) {
          return path + 'baza-button-' + attrs.type + '.directive.html';
        } else {
          return path + 'baza-button-primary.directive.html';
        }
      },
      link: function (scope, element, attrs) {
        scope.disabled = attrs.disabled !== undefined;
      }
    }
  }
})();

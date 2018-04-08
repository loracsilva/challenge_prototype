(function() {
  function buttonInput() {
    return {
      restrict: 'A',
      transclude: true,
      templateUrl: './src/app/components/atoms/baza-button-input/baza-button-input.directive.html',
      scope: {
        type: '=ngType',
        name: '=ngName',
        action: '&',
        isDisabled: '=ngDisabled'
      },
      link: function (scope, elemento, attrs) {
        scope.placeholder = attrs.placeholder;
        scope.icon = attrs.icon;
        scope.btn_text = attrs.textbtn;
      }
    }
  }

  angular.module('baza.atoms')
    .directive('bazaButtonInput', buttonInput);
}());

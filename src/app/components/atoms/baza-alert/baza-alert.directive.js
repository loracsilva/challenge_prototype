(function() {
  function alertBox() {
    return {
      restrict: 'A',
      transclude: true,
      templateUrl: './src/app/components/atoms/baza-alert/baza-alert.directive.html',
      scope: {
        type: '=ngType'
      },
      link: function (scope, elemento, attrs) {
        scope.text = attrs.textbtn;
        scope.icon = attrs.ngIcon;
      }
    }
  }

  angular.module('baza.atoms')
    .directive('bazaAlert', alertBox);
}());

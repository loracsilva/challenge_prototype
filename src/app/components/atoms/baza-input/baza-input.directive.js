(function() {
  function patternInput() {
  var templateType;
    return {
      restrict: 'AE',
      transclude: true,
      scope: {
        type: '=ngType',
        class: '=ngClass',
        name: '=ngName',
        valid: '=ngValid'
      },
      link: function (scope, elemento, attrs) {
        scope.placeholder = String(attrs.placeholder);
        scope.mask = String(attrs.mask);
        scope.icon = attrs.ngIcon;        
      },
      templateUrl: function(elem,attrs) {
        var path ="./src/app/components/atoms/baza-input/templates/";
        if(attrs.ngType == "search"){
          templateType = path +'baza-input-search.directive.html';
        }else{
          templateType = path +'baza-input.directive.html';
        }
        return templateType;
      },
    }
  }

  angular.module('baza.atoms')
    .directive('bazaInput', patternInput);
}());

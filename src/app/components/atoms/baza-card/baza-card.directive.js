(function() {
  function cardItem() {
    return {
      restrict: 'A',
      transclude: true,
      scope: {
        type:'='
      },
      link: function (scope, elemento, attrs) {
        
      },
      templateUrl: function (elem, attrs) {
        var path = './src/app/components/atoms/baza-card/template/';
        if (attrs.type == "image") {
          templateType = path +'baza-image-card.directive.html';
        } else {
          templateType = path +'baza-card.directive.html';
        }
        return templateType;
      },
    }
  }

  angular.module('baza.atoms')
    .directive('bazaCard', cardItem);
}());

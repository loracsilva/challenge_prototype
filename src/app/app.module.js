(function() {
  var moduleDependencies = [
    'ui.router',
    'pages',
    'organisms',
    'molecules',
    'atoms'
  ];

  angular.module('desafio', moduleDependencies);

  angular.element(function() {
    angular.bootstrap(document, ['desafio']);
  });
}());

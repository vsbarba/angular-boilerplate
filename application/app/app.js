var App = angular.module('boxScaffold', [
  'boxScaffold.dashboard',
  'boxScaffold.editor',
  // 'ngRoute',
  'ui.router',
  'chieffancypants.loadingBar'
]);

App.config(function myAppConfig($locationProvider, $stateProvider, $urlRouterProvider) {

  // /#/ to remove hashtag
  // $locationProvider.html5Mode(true);
  // Default URL Redirect
  $urlRouterProvider.otherwise('/404');

  $locationProvider.html5Mode(true);

});

App.run(function run() {

});

App.controller('BoxScaffoldCtrl', function AppCtrl($scope, $location) {
  $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
    if (angular.isDefined(toState.data.pageTitle)) {
      $scope.pageTitle = toState.data.pageTitle + ' | GROOVEBOX.TORO.IO';
    }
  });
});

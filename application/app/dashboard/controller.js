'use strict';

var dashboard = angular.module('boxScaffold.dashboard', [
  'ui.router'
]);

dashboard.globals = {
  appBaseUrl: '/app/dashboard/'
}

dashboard.config(function config($stateProvider) {

  $stateProvider
    .state('dashboard', {
      url: '/',
      templateUrl: dashboard.globals.appBaseUrl + '/dashboard.html',
      controller: 'DashboardCtrl',
      data: {
        pageTitle: 'Dashboard'
      }
    });

});

dashboard.controller('DashboardCtrl', function ($scope) {
  // This is simple a demo for UI Boostrap.
  $scope.dropdownDemoItems = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];

});

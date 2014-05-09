'use strict';

var editor = angular.module('boxScaffold.editor', [
  'ui.router'
]);

editor.globals = {
  appBaseUrl: '/app/editor/'
}

editor.config(function config($stateProvider) {
  $stateProvider
    .state('editor', {
      url: '/editor',
      views: {
        '': {
          templateUrl: editor.globals.appBaseUrl + '/editor.html',
          controller: 'EditorCtrl'
        },
        'toolbar@editor': {
          templateUrl: editor.globals.appBaseUrl + '/toolbar.html'
        },
        'panel@editor': {
          templateUrl: editor.globals.appBaseUrl + '/panel.html'
        },
        'keyboardShortcut@editor': {
          templateUrl: editor.globals.appBaseUrl + '/keyboardShortcut.html'
        }
      },
      data: {
        pageTitle: 'Editor'
      }
    });
});

editor.controller('EditorCtrl', function ($scope) {
  
  $scope.dropdownDemoItems = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];

  $scope.aceLoaded = function (_editor) {
    console.log('loaded');
  };

  $scope.aceChanged = function (_editor) {
    console.log('changed');
  };

  $scope.consoleLoaded = function (_editor) {
    console.log('loaded');
  };

  $scope.consoleChanged = function (_editor) {
    console.log('changed');
  };

});
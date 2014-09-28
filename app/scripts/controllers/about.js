'use strict';

/**
 * @ngdoc function
 * @name avaTodoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the avaTodoApp
 */
angular.module('avaTodoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

'use strict';

/**
 * @ngdoc function
 * @name scheduleApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the scheduleApp
 */
angular.module('scheduleApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

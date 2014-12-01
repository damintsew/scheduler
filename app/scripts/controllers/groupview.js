'use strict';

/**
 * @ngdoc function
 * @name scheduleApp.controller:GroupviewCtrl
 * @description
 * # GroupViewCtrl
 * Controller of the scheduleApp
 */
angular.module('scheduleApp')
  .controller('GroupViewCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
    $scope.groupId = $routeParams.groupId;

    $scope.back = function() {
      window.history.back();
    };
  }]);

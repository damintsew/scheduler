'use strict';

/**
 * @ngdoc overview
 * @name scheduleApp
 * @description
 * # scheduleApp
 *
 * Main module of the application.
 */
angular
  .module('scheduleApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      //.when('/', {
      //  templateUrl: 'views/groupselector.html',
      //  controller: 'GroupSelectorController'
      //})
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/groupsearch', {
        templateUrl: 'views/groupsearch.html',
        controller: 'GroupsearchCtrl'
      })
      .when('/group/:groupId', {
        templateUrl: 'views/groupview.html',
        controller: 'GroupViewCtrl'
      })
      .when('/groupView', {
        templateUrl: 'views/groupview.html',
        controller: 'GroupviewCtrl'
      })
      .otherwise({
        redirectTo: '/groupsearch'
      });
  });

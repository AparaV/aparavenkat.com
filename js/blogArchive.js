(function() {
'use strict';

var app = angular.module('blogArchive', ['ngRoute']);

var currentPost = '../articles/2016/dec/7-heroes.html';

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/dec-7-heroes', {
        templateUrl: '../articles/2016/dec/7-heroes.html'
      })
      .otherwise({
        templateUrl: currentPost
      });
}])
})();

'use strict';

var app = angular.module('archives', ['ui.router']);

var currentPost = '../articles/2016/dec/7-heroes.html';

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/default");
  $stateProvider
    .state('default', {
      url: "/default",
      templateUrl: currentPost
    })
    .state('dec/7-heroes', {
      url: "/dec/7-heroes",
      templateUrl: "../articles/2016/dec/7-heroes.html"
    });
});

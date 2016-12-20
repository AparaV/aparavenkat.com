'use strict';

var app = angular.module('archives', ['ui.router']);

var currentPost = '../articles/2016/dec/7-heroes.html';

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider
    //.when("/home", "/default")
    .otherwise("/");
  $stateProvider
    .state('home', {
      abstract: true,
      url: "/",
      templateUrl: "../sections/home.html",
      //controller: 'homeCtrl'
    })
    .state('archive', {
      abstract: true,
      url: "/archive",
      templateUrl: "../sections/archive.html"
    })
    .state('projects', {
      url: "/projects",
      templateUrl: "../sections/projects.html"
    })
    .state('about', {
      url: "/about",
      templateUrl: "../sections/about.html"
    })
    .state('contact', {
      url: "/contact",
      templateUrl: "../sections/contact.html"
    })
    .state('home.default', {
      url: '',
      templateUrl: currentPost
    })
    .state('archive.default', {
      url: '',
      templateUrl: currentPost
    })
    .state('archive.dec16-7-heroes', {
      url: "/2016/dec/7-heroes",
      templateUrl: "../articles/2016/dec/7-heroes.html"
    });
});

// app.controller('homeCtrl', ['$state',
//   function($state) {
//     $state.go('home.default');
// }]);

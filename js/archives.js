'use strict';

var app = angular.module('archives', ['ui.router']);

var currentPost = '../articles/2016/dec/7-heroes.html';

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/home");
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "../sections/home.html"
    })
    .state('archive', {
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
    .state('default', {
      url: "/default",
      templateUrl: currentPost
    })
    .state('home.post', {
      url: '',
      templateUrl: currentPost
    })
    .state('archive.dec16-7-heroes', {
      url: "/2016/dec/7-heroes",
      templateUrl: "../articles/2016/dec/7-heroes.html"
    });
});

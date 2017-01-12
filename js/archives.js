'use strict';

var app = angular.module('archives', ['ui.router']);

var currentPost = '../articles/2017/jan/2017-goals.html';

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
    /*Home childern*/
    .state('home.default', {
      url: '',
      templateUrl: currentPost
    })
    /*Parent Children*/
    .state('archive.default', {
      url: '',
      templateUrl: currentPost
    })
    /*2016*/
    //7 heroes
    .state('archive.dec16-7-heroes', {
      url: "/2016/dec/7-heroes",
      templateUrl: "../articles/2016/dec/7-heroes.html"
    })
    //building twitter app
    .state('archive.dec16-building-twitter-app', {
      url: "/2016/dec/building-twitter-app",
      templateUrl: "../articles/2016/dec/building-twitter-app.html"
    })
    /*2017*/
    //2017 goals
    .state('archive.jan17-2017-goals', {
      url: "2017/jan/2017-goals",
      templateUrl: "../articles/2017/jan/2017-goals.html"
    });
});

// app.controller('homeCtrl', ['$state',
//   function($state) {
//     $state.go('home.default');
// }]);

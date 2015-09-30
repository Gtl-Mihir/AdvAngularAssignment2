//'use strict';
//var app = angular.module('QubeApp', ['ui.router']);

//"use strict";

// Declare app level module which depends on views, and components
var QubeApp = angular.module("QubeApp", [
    //"ngRoute",
    "ui.router",
    "QubeApp.login",
    "QubeApp.signup"
]);
//config(["$routeProvider", function ($routeProvider) {
//    $routeProvider.otherwise({ redirectTo: "/login" });
//}]);
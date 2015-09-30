"use strict";

angular.module("QubeApp.signup", [])

//.config(["$routeProvider", function ($routeProvider) {
//    $routeProvider.when("/signup", {
//        templateUrl: "/app/components/signup/signup.html",
//        controller: "signupController"
//    });
//}])

.controller("signupController", ["$scope", "$http", function ($scope, $http) {
    $scope.FirstName = "";
    $scope.LastName = "";
    $scope.Email = "";
    $scope.username = "";
    $scope.Password = "";
   
    $scope.submitSignupForm = function () {
        var dataObj = {
            Username: $scope.username,
            Password: $scope.Password,
            email: $scope.Email,
            firstname: $scope.FirstName,
            lastname: $scope.LastName
        };
        var res = $http({
            method: "post",
            url:'http://127.0.0.1:3000/AddNewUser',
            data: dataObj,
            header: "application/x-www-form-urlencoded",
        });
        res.success(function (data, status, headers, config) {
            alert("User Registered");
        });
        res.error(function (data, status, headers, config) {
            alert("failure message: " + JSON.stringify({ data: data }));
        });
      
    };
}]);
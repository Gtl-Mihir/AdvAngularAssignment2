"use strict";

angular.module("QubeApp.login", [])

.controller("loginController", ["$scope", "$http", function ($scope, $http) {
    $scope.userName = "";
    $scope.password = "";
    $scope.submitLogin = function () {
        $http({
            method: 'GET',
            url: 'http://127.0.0.1:3000/AuthenticateUserList?uName=' + $scope.userName + '&Password=' + $scope.password + '',
            header: "application/x-www-form-urlencoded",
        }).then(function successCallback(response) {
            alert(response.data);
        }, function errorCallback(response) {
            alert(JSON.stringify(response));
        });
    };
}]);
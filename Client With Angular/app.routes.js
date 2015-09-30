
QubeApp.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
    
    // For any unmatched url, redirect to /login
    $urlRouterProvider.otherwise("/Pages/login");

    // Now set up the states
    $stateProvider
        .state('login', {
            url: "/login",
            templateUrl: "/Pages/Login/Login.html"
        })
        .state('signup', {
            url: "/signup",
            templateUrl: "Pages/Login/SignUp/SignUp.html"
        });
    //.state('state2.list', {
    //    url: "/list",
    //    templateUrl: "partials/state2.list.html",
    //    controller: function ($scope) {
    //        $scope.things = ["A", "Set", "Of", "Things"];
    //    }
    //});
}]);
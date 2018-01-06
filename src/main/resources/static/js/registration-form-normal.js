var app = angular.module("myApp", ["ngRoute"]);


app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "views/login.html",
            controller : "logincontroller"
        })
        .when("/login", {
            templateUrl : "views/login.html",
            controller : "logincontroller"
        }).when("/register/:username",{
        templateUrl : "views/student.html",
        controller : "stucontroller"
    });
});
app.controller("controller", [ '$scope', 'Auth',  function ($scope, $location) {
    $scope.go = function ( path ) {
        $location.path( path );
    };
}]);
app.controller("logincontroller", function ($scope,$http, $location) {
    $scope.login=function () {
        $http.get('http://webservice.uneti.angular:9999/user/check?email='+$scope.username+'&pass='+$scope.password).
        then(function(response) {
            $scope.user = response.data;
            if($scope.user.email !=null){
                $location.path( '/register/'+ $scope.username);}
            else alert($scope.user.email);
        });
    }
});
app.controller("stucontroller", function ($scope, $routeParams) {
    $scope.username=$routeParams.username;
});
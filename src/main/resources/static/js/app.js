var app = angular.module('app', ['ngRoute','ngResource']);
app.config(function($routeProvider){
    $routeProvider
        .when('/users',{
            templateUrl: '/views/users.html',
            controller: 'usersController'
        })
        .when('/pageflip',{
            templateUrl: '/views/pageflipdoc.html',
            controller: 'pageflipController'
        })
        .when('/roles',{
            templateUrl: '/views/roles.html',
            controller: 'rolesController'
        })
        .otherwise(
            { redirectTo: '/'}
        );
});
app.controller("colorController",function ($scope) {
   $scope.changeColor=function (element) {
        angular.element(document.querySelector(".active")).removeClass("active");
        var elAttr=element.currentTarget.value;
        angular.element(document.querySelector(".left-column img[data-image ='"+elAttr+"']")).addClass("active");
   };
});

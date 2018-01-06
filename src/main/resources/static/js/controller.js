app.controller('usersController', function($scope,$http) {
    $http.get('http://webservice.uneti.angular:9999/testPage').
    then(function(response) {
        $scope.greeting = response.data;
    });
    $scope.headingTitle = "User List";
});

app.controller('rolesController', function($scope) {
    $scope.headingTitle = "Roles List";
});
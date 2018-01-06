var ungdungAngularJS = angular.module("ungdungAngularJS", []);
ungdungAngularJS.factory('toanhocService', function() {
    var factory = {};
    factory.phepnhan = function(a, b) {
        return a * b
    }
    return factory;
});

ungdungAngularJS.service('tinhBPService', function(toanhocService){
    this.binhphuong = function(a) {
        return toanhocService.phepnhan(a,a);
    }
});

ungdungAngularJS.controller('tinhBPController', function($scope, tinhBPService) {
    $scope.binhphuong = function() {
        $scope.ketqua = tinhBPService.binhphuong($scope.number);
    }
});
ungdungAngularJS.controller('nameCtrl',function ($scope) {
    $scope.names=[
        {name:'Jani',country:'Norway'},
        {name:'Tom',country:'VietNam'},
        {name:'CaptainAmerica',country:'Lao'}
    ];
    $scope.count = 0;
    $scope.countover = 0;
    $scope.countclick = 0;
    $scope.myFunc=function (myE) {
        $scope.x=myE.clientX;
        $scope.y=myE.clientY;
    }
    $scope.myFunc1=function (myE) {

    }
});

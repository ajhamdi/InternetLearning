// appliocation of Angular in threee different situations 
var app = angular.module('basicApp', []);
app.controller('homeController', function ($scope) {
   $scope.uname = "demouser";
    $scope.testMe = function () {
        $scope.uname += "123";
    };
});
var controller = app.controller('listController', initController);
function initController($scope) {    
    $scope.items = ['First Item'];
    $scope.addItem = function() {
        if ($scope.newItem) {
            $scope.items.push($scope.newItem);
            $scope.newItem = undefined;
        }        
    }
}
var demo_controller = app.controller('demoController',initdemoController);
function initdemoController($scope, $http) {    
    $http.get('http://httpbin.org/ip')
        .then(function(response) {
            $scope.resultJSON = JSON.stringify(response);
            $scope.resultProperty = response.data.origin;
        });   
}
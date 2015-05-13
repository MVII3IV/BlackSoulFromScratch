var app = angular.module("app",[]);

app.controller("mainCtrl", function($scope){
    $scope.test = "hi";
});


app.directive('navbar', function() {
        return{
             restrict : 'E',
             templateUrl: 'navbar.html'
        }
});
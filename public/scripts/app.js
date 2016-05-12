var app = angular.module('mainApp', ['ngRoute']);
  

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
	.when('/', {
        templateUrl	:	'html/course.html',
        controller	:	'courseCtrl'
	})
    .when('/:code', {
        templateUrl	:	'html/course.html',
        controller	:	'courseCtrl'
	})
    .otherwise({ redirectTo: '/' });
	
});


app.controller('homeCtrl', function ($scope,$http,$location) {
	console.log('Home control is under control :P ');
});
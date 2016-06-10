var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
	'$scope',
	function($scope){
		$scope.test = 'Hello world!';
		$scope.posts = [
			{title: 'Post 1', upvotes: 5},
			{title: 'Post 2', upvotes: 2},
			{title: 'Post 3', upvotes: 15},
			{title: 'Post 4', upvotes: 9},
			{title: 'Post 5', upvotes: 4},
		]
	}
]);
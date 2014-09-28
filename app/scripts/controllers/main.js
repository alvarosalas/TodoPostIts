/*global $: false,*/
'use strict';
var connection = 'http://api.beta2.se/abdi/';
angular.module('avaTodoApp')
	.controller('MainCtrl', function ($scope, $http) {

		//Hämtar allt från url:n
		$http({
			method: 'GET',
			url: connection

		})
			.success(function (html) {
				$scope.todos = html;
				console.log(html);
			});

		//Har denna array ifall att serven skulle crasha.
		$scope.todos = [];

		$scope.groupName = 'AvaPostIT';
		$scope.postitColor = 'Yellow';



		//Function som addar todos
		var newTodo;
		$scope.addTodo = function () {
			newTodo = {
				text: $scope.todoTitle,
				descriptions: [],
				done: false,
				BGcolor: $scope.postitColor
			};
			newTodo.descriptions.push($scope.todoTask);
			$scope.todos.push(newTodo);
			$http.post(connection, newTodo).success(function () {
				$http.get(connection).success(function (data) {
					$scope.todos = data;
					newTodo = data[data.length - 1];
					console.log(newTodo);
				});
			});
			$scope.todoTitle = '';
			$scope.todoTask = '';
		};

		//Function som addar flera task i en todo
		var addMoreTodo;
		$scope.addMoreTask = function () {
			addMoreTodo = {
				descriptions2: $scope.moreTodoTask
			};
			newTodo.descriptions.push(addMoreTodo.descriptions2);
			$http.put(connection + newTodo.id, newTodo);
			$scope.moreTodoTask = '';

		};
		//Tar bort en todo från arrayen
		$scope.removeTodo = function (start, todoId) {
			console.log(start);
			$scope.todos.splice(start, 1);
			$http.delete(connection + todoId);
		};

		$scope.color = {
			'Yellow': '../images/post-it.png',
			'Blue': '../images/post-it-blue.png',
			'Orange': '../images/post-it-orange.png',
			'Green': '../images/post-it-green.png',
			'Pink': '../images/post-it-pink.png'
		};

		$scope.editTitle = function (todo, editedTitle) {
			todo.text = editedTitle;
			$http.put(connection + todo.id, todo);
			console.log(editedTitle);
		};


		$scope.editTask = function (taskId, todo, editedTask) {
			todo.descriptions[taskId] = editedTask;
			$http.put(connection + todo.id, todo);
		};
	});
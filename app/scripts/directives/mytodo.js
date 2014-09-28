'use strict';

/**
 * @ngdoc directive
 * @name avaTodoApp.directive:myTodo
 * @description
 * # myTodo
 */
angular.module('avaTodoApp')
	.directive('myTodo', function () {
		return {
			template: '<div class="input-group" id="postIt" style="background-image: url({{color[todo.BGcolor]}})">' +
				'<button id="deleteButton" class="btn btn-default" ng-click="removeTodo($index, todo.id)"><span class="glyphicon glyphicon-trash"></span>' +
				'</button>' +
				'<p class="title" ng-hide="editingT" ng-click="editingT = true"> {{todo.text}}</p>' +
				'<form ng-show="editingT" ng-submit="editingT = false">' +
				'<input type="text" ng-model="todo.text" placeholder ="Title" ng-required/>' +
				'<button class="btn" type="submit" ng-click="editTitle(todo, todo.text)">save</button>' +
				'</form>' +



			'<ul>' +
				'<li id="descriptionText" ng-repeat="description in todo.descriptions track by $index">' +
				'<span ng-hide="editing" ng-click="editing = true" >{{description}} </span>' +
				'<form ng-show="editing" ng-submit="editing = false">' +
				'<input type="text" ng-model="editedTask" placeholder ="Task" ng-required/>' +
				'<button class="btn" type="submit" ng-click="editTask($index, todo, editedTask)">save</button>' +
				'</form>' +

			'</li>' +
				'</ul>' +
				'<br>' +
				'<div class="clearfix"></div>' +
				'</div>',
			restrict: 'E',
			link: function postLink(scope, element, attrs) {
				element.text();
			}
		};
	})
	.directive('myCreatepostit', function () {
		return {
			restrict: 'E',
			template: '<div>' +
				'<h3>Create Post</h3>' +
				'<select id="postitColor" class="form-control" ng-model="postitColor">' +
				'<option>Yellow</option>' +
				'<option>Blue</option>' +
				'<option>Orange</option>' +
				'<option>Green</option>' +
				'<option>Pink</option>' +
				'</select>' +

			'<form ng-submit="addTodo()">' +
				'<input type="text" ng-model="todoTitle" placeholder="Title">' +
				'<input type="text" ng-model="todoTask" placeholder="Task" />' +
				'<button class="btn btn-success btn-mini"><i class="icon-plus"></i> Add Todo</button>' +
				'</form>' +
				'</div>',

			link: function postLink(scope, element, attrs) {
				element.text();
			}
		};
	})
	.directive('myAddtask', function () {
		return {
			restrict: 'E',
			template: '<h3>Add more task on recent post</h3>' +
				'<form ng-submit="addMoreTask()">' +
				'<input type="text" ng-model="moreTodoTask" placeholder="New Task" />' +
				'<button class="btn btn-success btn-mini"><i class="icon-plus"></i> + </button>' +
				'</form>',

			link: function postLink(scope, element, attrs) {
				element.text();
			}
		};
	});
'use strict';

const $ = require('jquery');

module.exports = {
	setTodos: function(todos) {
		if ($.isArray(todos)) {
			localStorage.setItem('todos', JSON.stringify(todos));
			return todos;
		}
	},
	getTodos: function() {
		let strTodos = localStorage.getItem('todos'),
			todos;

		try {
			todos = JSON.parse(strTodos)
		} catch (err) {

		}
		return $.isArray(todos) ? todos : [];
	},
	filterTodos: function(todos, showCompleted, searchText) {
		let filteredTodos = todos;
		//showCompleted
		filteredTodos = filteredTodos.filter(todo => {
			return !todo.completed || showCompleted;
		});
		//searchText
		if (searchText) {
			filteredTodos = filteredTodos.filter(todo => {
				return todo.text.toLowerCase().indexOf(searchText) !== -1;
			});
		}
		//sort
		filteredTodos.sort((a, b) => {
			if (!a.completed && b.completed) {
				return -1;
			} else if (a.completed && !b.completed) {
				return 1;
			} else {
				return 0;
			}
		});

		return filteredTodos;
	}
}
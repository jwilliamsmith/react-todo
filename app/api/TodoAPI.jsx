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
	}
}
'use strict';

const React = require('react');
const TodoList = require('TodoList');
const AddTodo = require('AddTodo');

const TodoApp = React.createClass({
	getInitialState: function() {
		return {
			todos: [
				{
					id: 1,
					text: 'Walk the cat'
				},
				{
					id: 2,
					text: 'Clean room'
				},
				{
					id: 3,
					text: 'Take out garbage'
				},
				{
					id: 4,
					text: 'Buy groceries'
				}
			]
		}
	},
	handleAddTodo: function(text) {
		console.log('new todo: '+text);
	},
	render: function() {
		let {todos} = this.state;

		return (
			<div>
				<TodoList todos={todos} />
				<AddTodo onAddTodo={this.handleAddTodo} />
			</div>
		);
	}
});

module.exports = TodoApp;
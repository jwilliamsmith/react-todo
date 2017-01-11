'use strict';

const React = require('react');
const TodoList = require('TodoList');

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
	render: function() {
		let {todos} = this.state;

		return (
			<div>
				<TodoList todos={todos} />
			</div>
		);
	}
});

module.exports = TodoApp;
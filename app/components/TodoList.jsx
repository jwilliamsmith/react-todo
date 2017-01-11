'use strict';

const React = require('react');
const Todo = require('Todo');

const TodoList = React.createClass({
	render: function () {
		let {todos} = this.props,
			renderTodos = () => {
				return todos.map(t => {
					return (
						<Todo key={t.id} {...t}/>
					);
				})
			};

		return (
			<div>
				{renderTodos()}
			</div>
		);
	}
});

module.exports = TodoList;
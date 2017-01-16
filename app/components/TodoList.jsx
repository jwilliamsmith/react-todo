'use strict';

const React = require('react');
const Todo = require('Todo');

const TodoList = React.createClass({
	render: function () {
		let {todos} = this.props,
			renderTodos = () => {
				if (todos.length === 0) {
					return (
						<p className="container__message">Nothing to do.</p>
					)
				}
				return todos.map(t => {
					return (
						<Todo key={t.id} {...t} onToggle={this.props.onToggle} />
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
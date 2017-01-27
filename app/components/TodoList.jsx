'use strict';

const React = require('react');
const {connect} = require('react-redux');
import Todo from 'Todo';

export const TodoList = React.createClass({
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
						<Todo key={t.id} {...t}  />
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

export default connect(
	(state) => {
		return {
			todos: state.todos
		}
	}
)(TodoList);
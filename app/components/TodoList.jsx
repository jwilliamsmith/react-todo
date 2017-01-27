'use strict';

const React = require('react');
const {connect} = require('react-redux');
const TodoAPI = require('TodoAPI');
import Todo from 'Todo';

export const TodoList = React.createClass({
	render: function () {
		let {todos, showCompleted, searchText} = this.props,
			renderTodos = () => {
				if (todos.length === 0) {
					return (
						<p className="container__message">Nothing to do.</p>
					)
				}
				return TodoAPI.filterTodos(todos, showCompleted, searchText).map(t => {
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
		return state;
	}
)(TodoList);
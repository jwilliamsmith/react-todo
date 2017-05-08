'use strict';

const React = require('react');
const {connect} = require('react-redux');
const TodoAPI = require('TodoAPI');
import Todo from 'Todo';

export const TodoList = React.createClass({
	render: function () {
		let {todos, showCompleted, searchText} = this.props,
				filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText),
			renderTodos = () => {
				if (filteredTodos.length === 0) {
					return (
						<p className="container__message">Nothing to do.</p>
					)
				}
				return filteredTodos.map(t => {
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
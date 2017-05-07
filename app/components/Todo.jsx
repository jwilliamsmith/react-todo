'use strict';

const React = require('react');
const {connect} = require('react-redux');
const actions = require('actions');
const moment = require('moment');

export const Todo = React.createClass({
	render: function () {
		let {text, id, completed, createdAt, completedAt, dispatch} = this.props,
			todoClassName = completed ? 'todo todo-completed' : 'todo';
		let renderDate = () => {
			let message = completed ? 'Completed ' : 'Created ',
				timestamp = completed ? completedAt : createdAt;
			return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
		}
		return (
			<div className={todoClassName} onClick={ () => {
					dispatch(actions.startToggleTodo(id, !completed));
				}}>
				<div>
					<input type="checkbox" checked={completed} />
				</div>
				<div>
					<p>{text}</p>
					<p className="todo__subtext">{renderDate()}</p>
				</div>
			</div>
		);
	}
});

export default connect()(Todo);

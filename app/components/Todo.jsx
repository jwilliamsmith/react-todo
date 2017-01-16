'use strict';

const React = require('react');
const moment = require('moment');

const Todo = React.createClass({
	render: function () {
		let {text, id, completed, createdAt, completedAt} = this.props;
		let renderDate = () => {
			let message = completed ? 'Completed ' : 'Created ',
				timestamp = completed ? completedAt : createdAt;
			return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
		}
		return (
			<div onClick={ () => {this.props.onToggle(id)} }>
				<input type="checkbox" checked={completed} />
				<p>{text}</p>
				<p>{renderDate()}</p>
			</div>
		);
	}
});

module.exports = Todo;
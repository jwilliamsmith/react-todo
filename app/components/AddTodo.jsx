'use strict';

const React = require('react');

const AddTodo = React.createClass({
	handleSubmit: function(evt) {
		evt.preventDefault();
		let todoText = this.refs.newTodo.value;
		if (todoText) {
			this.refs.newTodo.value = '';
			this.props.onAddTodo(todoText);
		} else {
			this.refs.newTodo.focus();
		}
	},
	render: function() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input ref="newTodo" type="text" placeholder="What needs to be done?" />
					<button className="button expanded" type="submit">Add</button>
				</form>
			</div>
		);
	}
});

module.exports = AddTodo;
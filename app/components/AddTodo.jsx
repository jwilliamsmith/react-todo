'use strict';

const React = require('react');
const {connect} = require('react-redux');
const actions = require('actions');

export const AddTodo = React.createClass({
	handleSubmit: function(evt) {
		evt.preventDefault();
		let {dispatch} = this.props;
		let todoText = this.refs.newTodo.value;
		if (todoText) {
			this.refs.newTodo.value = '';
			dispatch(actions.startAddTodo(todoText));
		} else {
			this.refs.newTodo.focus();
		}
	},
	render: function() {
		return (
			<div className="container__footer">
				<form onSubmit={this.handleSubmit}>
					<input ref="newTodo" type="text" placeholder="What needs to be done?" />
					<button className="button expanded" type="submit">Add</button>
				</form>
			</div>
		);
	}
});

export default connect()(AddTodo);
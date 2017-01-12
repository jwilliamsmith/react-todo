'use strict';

const React = require('react');
const TodoList = require('TodoList');
const AddTodo = require('AddTodo');
const TodoSearch = require('TodoSearch');
const uuid = require('uuid');

const TodoApp = React.createClass({
	getInitialState: function() {
		return {
			showCompleted: false,
			searchText: '',
			todos: [
				{
					id: uuid(),
					text: 'Walk the cat'
				},
				{
					id: uuid(),
					text: 'Clean room'
				},
				{
					id: uuid(),
					text: 'Take out garbage'
				},
				{
					id: uuid(),
					text: 'Buy groceries'
				}
			]
		}
	},
	handleAddTodo: function(text) {
		this.setState({
			todos: [
				...this.state.todos,
				{
					id: uuid(),
					text: text
				}
			]
		})
	},
	handleSearch: function(showCompleted, searchText) {
		this.setState({
			showCompleted,
			searchText: searchText.toLowerCase()
		})
	},
	render: function() {
		let {todos} = this.state;

		return (
			<div>
				<TodoSearch onSearch={this.handleSearch} />
				<TodoList todos={todos} />
				<AddTodo onAddTodo={this.handleAddTodo} />
			</div>
		);
	}
});

module.exports = TodoApp;
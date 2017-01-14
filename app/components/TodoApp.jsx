'use strict';

const React = require('react');
const uuid = require('uuid');

const TodoList = require('TodoList');
const AddTodo = require('AddTodo');
const TodoSearch = require('TodoSearch');
const TodoAPI = require('TodoAPI');

const TodoApp = React.createClass({
	getInitialState: function() {
		return {
			showCompleted: false,
			searchText: '',
			todos: TodoAPI.getTodos()
		}
	},
	componentDidUpdate: function() {
		TodoAPI.setTodos(this.state.todos);
	},
	handleAddTodo: function(text) {
		this.setState({
			todos: [
				...this.state.todos,
				{
					id: uuid(),
					text: text,
					completed: false
				}
			]
		})
	},
	handleToggle: function(id) {
		let updatedTodos = this.state.todos.map(todo => {
			if (todo.id === id) {
				todo.completed = !todo.completed;
			}
			return todo;
		});
		this.setState({todos: updatedTodos});
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
				<TodoList todos={todos} onToggle={this.handleToggle}/>
				<AddTodo onAddTodo={this.handleAddTodo} />
			</div>
		);
	}
});

module.exports = TodoApp;
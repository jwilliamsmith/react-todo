'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jquery');
const TestUtils = require('react-addons-test-utils');

const TodoList = require('TodoList');
const Todo = require('Todo');

describe('TodoList', () => {
	it('should exist', () => {
		expect(TodoList).toExist();
	});
	it('should render 1 component for each item', () => {
		let todos = [
			{
				id: 1,
				text: 'Do something'
			},
			{
				id: 2, 
				text: 'Do something else'
			}
		];
		let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
		let todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

		expect(todosComponents.length).toBe(todos.length);
	});
	it('should render empty message if no todos', () => {
		let todos = [];
		let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
		let $el = $(ReactDOM.findDOMNode(todoList));
		expect($el.find('.container__message').length).toBe(1);
	});
});
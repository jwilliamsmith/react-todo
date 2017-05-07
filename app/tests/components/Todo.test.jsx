'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jquery');
const TestUtils = require('react-addons-test-utils');
import * as actions from 'actions';
import {Todo} from 'Todo';

describe('Todo', () => {
	it('should exist', () => {
		expect(Todo).toExist();
	});
	it('should dispatch toggleTodo action on click', () => {
		let todoData = {id: 199, text: 'Write todo test', completed: true},
				action = actions.startToggleTodo(todoData.id, !todoData.completed),
				spy = expect.createSpy(),
				todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy} />),
				$el = $(ReactDOM.findDOMNode(todo));
		TestUtils.Simulate.click($el[0]);
		expect(spy).toHaveBeenCalledWith(action);

	})
});
'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jquery');
const TestUtils = require('react-addons-test-utils');

const Todo = require('Todo');

describe('Todo', () => {
	it('should exist', () => {
		expect(Todo).toExist();
	});
	it('should call onToggle prop with id on click', () => {
		let todoData = {id: 199, text: 'Write todo test', completed: true},
			spy = expect.createSpy(),
			todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy} />),
			$el = $(ReactDOM.findDOMNode(todo));
		TestUtils.Simulate.click($el[0]);
		expect(spy).toHaveBeenCalledWith(199);

	})
});
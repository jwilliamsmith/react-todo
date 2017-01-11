'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const AddTodo = require('AddTodo');

describe('AddTodo', () => {
	it('should exist', () => {
		expect(AddTodo).toExist();
	});
	it('should call onAddTodo if text is valid', () => {
		let spy = expect.createSpy(),
			addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />),
			$el = $(ReactDOM.findDOMNode(addTodo));
		addTodo.refs.newTodo.value = 'dogballs';
		TestUtils.Simulate.submit($el.find('form')[0]);
		expect(spy).toHaveBeenCalledWith('dogballs');
	});
	it('should NOT call onAddTodo if text is invalid', () => {
		let spy = expect.createSpy(),
			addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />),
			$el = $(ReactDOM.findDOMNode(addTodo));
		addTodo.refs.newTodo.value = '';
		TestUtils.Simulate.submit($el.find('form')[0]);
		expect(spy).toNotHaveBeenCalled();
	});
});
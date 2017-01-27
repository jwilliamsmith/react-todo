'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jquery');
const TestUtils = require('react-addons-test-utils');

const {AddTodo} = require('AddTodo');


describe('AddTodo', () => {
	it('should exist', () => {
		expect(AddTodo).toExist();
	});
	it('should dispatch ADD_TODO if valid', () => {
		let spy = expect.createSpy(),
				todoText = 'dogballs',
				action = { type: 'ADD_TODO', text: todoText },
				addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />),
				$el = $(ReactDOM.findDOMNode(addTodo));
		addTodo.refs.newTodo.value = 'dogballs';
		TestUtils.Simulate.submit($el.find('form')[0]);
		expect(spy).toHaveBeenCalledWith(action);
	});
	it('should NOT dispatch ADD_TODO if text is invalid', () => {
		let spy = expect.createSpy(),
			addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />),
			$el = $(ReactDOM.findDOMNode(addTodo));
		addTodo.refs.newTodo.value = '';
		TestUtils.Simulate.submit($el.find('form')[0]);
		expect(spy).toNotHaveBeenCalled();
	});
});
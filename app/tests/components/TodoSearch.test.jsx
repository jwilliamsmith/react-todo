'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jquery');
const TestUtils = require('react-addons-test-utils');

import {TodoSearch} from 'TodoSearch';

describe('TodoSearch', () => {
	it('should exist', () => {
		expect(TodoSearch).toExist();
	});
	it('should dispatch SET_SEARCH_TEXT on input change', () => {
		let spy = expect.createSpy(),
				searchText = 'dogballs',
				action = {type: 'SET_SEARCH_TEXT', searchText},
				todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />);
		todoSearch.refs.searchText.value = searchText;
		TestUtils.Simulate.change(todoSearch.refs.searchText);
		expect(spy).toHaveBeenCalledWith(action);
	});
	it('should dispatch TOGGLE_SHOW_COMPLETED when checked', () => {
		let action = {type: 'TOGGLE_SHOW_COMPLETED'},
				spy = expect.createSpy(),
				searchText = 'catscratch',
			todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />);
		todoSearch.refs.showCompleted.checked = true;
		TestUtils.Simulate.change(todoSearch.refs.showCompleted);
		expect(spy).toHaveBeenCalledWith(action);
	});
});
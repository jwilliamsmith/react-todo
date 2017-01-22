'use strict';

const expect = require('expect');
const actions = require('actions');

describe('Actions', () => {
	it('should generate search text action', () => {
		let action = {
				type: 'SET_SEARCH_TEXT',
				searchText: 'Some text'
			},
		res = actions.setSearchText(action.searchText);
		expect(res).toEqual(action);
	});
	it('should generate add todo action', () => {
		let action = {
				type: 'ADD_TODO',
				text: 'Fire it up.'
			},
		res = actions.addTodo(action.text);
		expect(res).toEqual(action);
	});
	it('should generate toggle completed action', () => {
		let action = {
				type: 'TOGGLE_SHOW_COMPLETED'
			},
		res = actions.toggleShowCompleted(action);
		expect(res).toEqual(action);
	});
	it('should generate toggle todo action', () => {
		let action = {
				type: 'TOGGLE_TODO',
				id: 5
			},
		res = actions.toggleTodo(action.id);
		expect(res).toEqual(action);
	});
})
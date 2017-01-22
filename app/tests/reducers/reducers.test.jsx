'use strict';

const expect = require('expect');
const reducers = require('reducers');
const df = require('deep-freeze-strict');

describe('Reducers', () => {
	describe('searchTextReducer', () => {
		it('should set search text', () => {
			let action = {
					type: 'SET_SEARCH_TEXT',
					searchText: 'dog'
				},
			res = reducers.searchTextReducer(df(''), df(action));
			expect(res).toEqual(action.searchText);
		});
	});
	describe('showCompletedReducer', () => {
		it('should toggle showCompeted', () => {
			let action = {
					type: 'TOGGLE_SHOW_COMPLETED'
				},
			res = reducers.showCompletedReducer(df(false), df(action));
			expect(res).toEqual(true);
		});
	});
});
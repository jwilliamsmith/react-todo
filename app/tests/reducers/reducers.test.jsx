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
	describe('todosReducer', () => {
		it('should add new todo', () => {
			let action = {
					type: 'ADD_TODO',
					todo: {
						id: 'abc123',
						text: 'Blow stuff up.',
						completed: false,
						createdAt: 29458749
					}
				},
			res = reducers.todosReducer(df([]), df(action));
			expect(res.length).toEqual(1);
			expect(res[0]).toEqual(action.todo);
		});
		it('should toggle todo completed', () => {
			let action = {
					type: 'TOGGLE_TODO',
					id: 5
				},
				todo = {				
						id: 5,
						text: 'look out',
						completed: false,
						completedAt: undefined
					},
				res = reducers.todosReducer(df([todo]), df(action));
			expect(res.length).toEqual(1);
			expect(res[0].completed).toEqual(true);
			expect(res[0].completedAt).toExist();
		});
	});
	it('should add existing todos', () => {
		let todos = [{
					id: '111',
					text: 'Something goes here.',
					completed: false,
					completedAt: undefined,
					createdAt: 3300
				}],
				action = {
					type: 'ADD_TODOS',
					todos
				},
				res = reducers.todosReducer(df([]), df(action));
				expect(res.length).toEqual(1);
				expect(res[0]).toEqual(todos[0]);		
	})
});
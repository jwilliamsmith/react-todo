'use strict';

import configMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const expect = require('expect');

const actions = require('actions');

const createMockStore = configMockStore([thunk]);

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
				todo: {
					id: '123abc',
					text: 'Fire it up.',
					completed: false,
					createdAt: 0
				}
			},
			res = actions.addTodo(action.todo);
		expect(res).toEqual(action);
	});
	it('should create todo and dispatch ADD_TODO', (done) => {
		const store = createMockStore({});
		const todoText = 'Test ToDo item';
		store.dispatch(actions.startAddTodo(todoText))
			.then(() => {
				const actions = store.getActions();
				expect(actions[0]).toInclude({
					type: 'ADD_TODO'
				});
				expect(actions[0].todo).toInclude({
					text: todoText
				});
				done();
			}).catch(done);
	});
	it('should generate add todos action object', () => {
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
				res = actions.addTodos(todos);
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
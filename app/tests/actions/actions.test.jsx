'use strict';

import configMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const expect = require('expect');

import firebase, {fbref} from 'app/firebase/';

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
	it('should generate update todo action', () => {
		let action = {
				type: 'UPDATE_TODO',
				id: 5,
				updates: {completed: false}
			},
		res = actions.updateTodo(action.id, action.updates);
		expect(res).toEqual(action);
	});
	describe('Tests with firebase todos', () => {
		let testTodoRef;
		beforeEach((done) => {
			let todosRef = fbref.child('todos');
			todosRef.remove().then(() => {
				testTodoRef = fbref.child('todos').push();
				return testTodoRef.set({
					text: 'More shit to do',
					completed: false,
					createdAt: 654321
				})
			})
			.then(() => done())
			.catch(done);
		});
		afterEach((done) => {
			testTodoRef.remove().then(() => done());
		});

		it('should return todos from firebase on startAddTodos', (done) => {
			const store = createMockStore({});
			const action = actions.startAddTodos();
			store.dispatch(action).then(() => {
				const mockActions = store.getActions();
				expect(mockActions[0].type).toEqual('ADD_TODOS');
				expect(mockActions.length).toEqual(1);
				expect(mockActions[0].todos[0].text).toEqual('More shit to do');
				done();
			}).catch(done);
		})

		it('should toggle todo and dispatch UPDATE_TODO', (done) => {
			const store = createMockStore({});
			const action = actions.startToggleTodo(testTodoRef.key, true);
			store.dispatch(action).then(() => {
				const mockActions = store.getActions();
				expect(mockActions[0]).toInclude({
					type: 'UPDATE_TODO',
					id: testTodoRef.key
				});
				expect(mockActions[0].updates).toInclude({
					completed: true
				});
				expect(mockActions[0].updates.completedAt).toExist();
				done();
			}).catch(done);
		});
	});
});
'use strict';

const expect = require('expect');

const TodoAPI = require("TodoAPI");

describe('TodoAPI', () => {
	beforeEach(() => {
		localStorage.removeItem('todos');
	})
	it('should exist', () => {
		expect(TodoAPI).toExist();
	});
	describe('filterTodos', () => {
		let todos = [
			{
				id: 1,
				text: 'some text',
				completed: true
			},
			{
				id: 2,
				text: 'other text',
				completed: false
			},
			{
				id: 3,
				text: 'some text',
				completed: true
			}
		];

		it('shoud return all items if showCompleted === true', () => {
			let filteredTodos = TodoAPI.filterTodos(todos, true, '');
			expect(filteredTodos.length).toBe(3);
		});
		it('should not return comleted todos when showCompleted === false', () => {
			let filteredTodos = TodoAPI.filterTodos(todos, false, '');
			expect(filteredTodos.length).toBe(1);
		});
		it('should sort by completed status', () => {
			let filteredTodos = TodoAPI.filterTodos(todos, true, '');
			expect(filteredTodos[0].completed).toBe(false);
		});
		it('should return all todos when searchText is empty', () => {
			let filteredTodos = TodoAPI.filterTodos(todos, true, '');
			expect(filteredTodos.length).toBe(3);
		});
		it('should filter todos by searchText', () => {
			let filteredTodos = TodoAPI.filterTodos(todos, true, 'some');
			expect(filteredTodos.length).toBe(2);
		});
	});
})


'use strict';

const uuid = require('node-uuid');
const moment = require('moment');


export const searchTextReducer = (state = '', action) => {
	switch (action.type) {
		case 'SET_SEARCH_TEXT':
			return action.searchText;
		default:
			return state;
	}
};

export const showCompletedReducer = (state=false, action) => {
	switch (action.type) {
		case 'TOGGLE_SHOW_COMPLETED':
			return !state;
		default:
			return state;
	}
};

export const todosReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				action.todo
			];
		case 'TOGGLE_TODO':
			let newState = state.map(todo => {
				if (action.id === todo.id) {
					let nextCompleted = !todo.completed;
					return {
						...todo,
						completed: nextCompleted,
						completedAt: nextCompleted ? moment().unix() : undefined
					}
				} else {
					return todo;
				}
			});
			return [...newState];
		case 'ADD_TODOS':
			return [
				...state,
				...action.todos
			]
		default:
			return state;
	}
}
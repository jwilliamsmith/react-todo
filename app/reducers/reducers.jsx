'use strict';
const moment = require('moment');

export const authReducer = (state = {}, action) => {
	switch (action.type) {
		case 'LOGIN':
			return {
					uid: action.uid
			};
		case 'LOGOUT': 
			return {};
		default:
			return state;
	}
}

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
		case 'UPDATE_TODO':
			let newState = state.map(todo => {
				if (action.id === todo.id) {
					return {
						...todo,
						...action.updates
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
		case 'LOGOUT':
			return [];
		default:
			return state;
	}
}
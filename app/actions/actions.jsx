'use strict';

import firebase, {fbref, githubProvider} from 'app/firebase/';
import moment from 'moment';

export const setSearchText = (searchText) => {
	return {
		type: 'SET_SEARCH_TEXT',
		searchText
	};
}
export const addTodo = (todo) => {
	return {
		type: 'ADD_TODO',
		todo
	};
}

export const login = (uid) => {
	return {
		type: 'LOGIN',
		uid
	}
}

export const logout = () => {
	return {
		type: 'LOGOUT'
	}
}

export const startAddTodo = (text) => {
	return (dispatch, getState) => {
		let todo = 	{
					text,
					completed: false,
					createdAt: moment().unix(),
					completedAt: null
				},
				uid = getState().auth.uid,
				todoRef = fbref.child(`users/${uid}/todos`).push(todo);
		return todoRef.then(() => {
			dispatch(addTodo({
				...todo,
				id: todoRef.key
			}));
		})
	}
}

export const addTodos = (todos) => {
	return {
		type: 'ADD_TODOS',
		todos
	}
}
export const startAddTodos = () => {
	return (dispatch, getState) => {
		let todos,
				uid = getState().auth.uid,
				todosRef = fbref.child(`users/${uid}/todos`);
		return todosRef.once('value').then(snapshot => {
			let todos = snapshot.val() || {},
					parsedTodos = [],
					keys = Object.keys(todos)
			keys.forEach(key => {
				let todo = {
							id: key,
							...todos[key]
				};
				parsedTodos.push(todo);
			})
			dispatch(addTodos(parsedTodos));
		});
	}
}
export const toggleShowCompleted = () => {
	return {
		type: 'TOGGLE_SHOW_COMPLETED'
	}
}
export const updateTodo = (id, updates) => {
	return {
		type: 'UPDATE_TODO',
		id,
		updates
	}
}

export const startToggleTodo = (id, completed) => {
	return (dispatch, getState) => {
		let uid = getState().auth.uid,
				todoRef = fbref.child(`users/${uid}/todos/${id}`),
				updates = {completed, completedAt: completed ? moment().unix() : null};
		return todoRef.update(updates).then(() => {
			dispatch(updateTodo(id, updates));
		});
	};
}
export const startLogin = () => {
	return (dispatch, getState) => {
		return firebase.auth().signInWithPopup(githubProvider)
			.then((result) => {
				console.log('auth worked', result);
			}, (error) => {
				console.log('auth failed', error);
			});
	}
}

export const startLogout = () => {
	return (dispatch, getState) => {
		return firebase.auth().signOut()
			.then(() => {
				console.log('logged out')
			})
	}		
}

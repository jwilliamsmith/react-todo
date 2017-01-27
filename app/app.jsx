'use strict'
const React = require('react');
const ReactDOM = require('react-dom');
const {Provider} = require('react-redux');
const { Route, Router, IndexRoute, hashHistory } = require('react-router');

const TodoApp = require('TodoApp');
const actions = require('actions');
const store = require('configureStore').configure();

store.subscribe(() => {
	console.log('New state', store.getState());
});

//App CSS
require('style!css!sass!applicationStyles');

ReactDOM.render(
	<Provider store={store}>
		<TodoApp />
	</Provider>,
	document.getElementById('app')
);


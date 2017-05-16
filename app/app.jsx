'use strict'
const React = require('react');
const ReactDOM = require('react-dom');
const {Provider} = require('react-redux');
const { Route, Router, IndexRoute, hashHistory } = require('react-router');

const Main = require('Main');

import TodoApp from 'TodoApp';
const actions = require('actions');
const store = require('configureStore').configure();
const TodoAPI = require('TodoAPI');
import Login from 'Login';

store.dispatch(actions.startAddTodos());

//App CSS
require('style!css!sass!applicationStyles');

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/">
				<Route path="todos" component={TodoApp} />
				<IndexRoute component={Login} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);


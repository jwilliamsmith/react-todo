import React from 'react';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import firebase from 'app/firebase/';
import TodoApp from 'TodoApp';
import Login from 'Login';

const requireLogin = (nextState, replace, next) => {
	if (!firebase.auth().currentUser) {
		replace('/');
	}
	next();
}

const authRedirect = (nextState, replace, next) => {
	if (firebase.auth().currentUser) {
		replace('/todos');
	}
	next();
}

export default (
  	<Router history={hashHistory}>
			<Route path="/">
				<Route path="todos" component={TodoApp} onEnter={requireLogin} />
				<IndexRoute component={Login} onEnter={authRedirect} />
			</Route>
		</Router>
)
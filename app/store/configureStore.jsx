'use strict';
const redux = require('redux');
const {searchTextReducer, showCompletedReducer, todosReducer} = require('reducers');
export const configure = (initialState = {}) => {
  let reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });
  let store = redux.createStore(reducer, initialState, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
  return store;
};
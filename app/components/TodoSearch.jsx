'use strict';

const React = require('react');

const TodoSearch = React.createClass({
	handleSearch: function() {
		let showCompleted = this.refs.showCompleted.checked,
			searchText = this.refs.searchText.value;
		this.props.onSearch(showCompleted, searchText);
	},	
	render: function() {
		return (
			<div>
				<div>
					<input onChange={this.handleSearch} type="search" ref="searchText" placeholder="Search Todos" />
				</div>
				<div>
					<label>
						<input onChange={this.handleSearch} ref="showCompleted" type="checkbox" />
						Show completed Todos
					</label>
				</div>
			</div>
		);
	}
});

module.exports = TodoSearch;
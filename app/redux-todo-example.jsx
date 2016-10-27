var redux = require('redux');
console.log('starting todo redux example');

var stateDefault = {
 searchText: '',
 showCompleted: false,
 todos: []
};
var reducer = (state = stateDefault, action) => {
	switch (action.type) {
		case 'CHANGE_SEARCH_TEXT':
			
			return {
				...state,
				searchText: action.searchText
			};
			break;
		default:
			return state;
			break;
	}

};

var store = redux.createStore(reducer, 
	window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f=>f
	);
store.subscribe(() => {
	var state = store.getState()

	document.getElementById('app').innerHTML = state.searchText;
});
console.log('Current state ', store.getState());


store.dispatch ({
	type: 'CHANGE_SEARCH_TEXT',
	searchText: 'work'
});
store.dispatch ({
	type: 'CHANGE_SEARCH_TEXT',
	searchText: 'dog'
});
store.dispatch ({
	type: 'CHANGE_SEARCH_TEXT',
	searchText: 'something else'
});

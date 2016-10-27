var redux = require('redux');

console.log('starting redux example');

var reducer = (state= {name: 'Anonymous'}, action)=> {
	// state = state || {name: 'Anonymous'};//es5
	// console.log('New action ', action);

	switch (action.type) {
		case 'CHANGE_NAME':
			return {
				...state,
				name: action.name
			};
			break;
		default:
			return state;
	}
};
var store = redux.createStore(reducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//subscribe to changes
var unsubscribe = store.subscribe(() => {
	var state = store.getState();

	console.log('Name is ', state.name);
	document.getElementById('app').innerHTML = state.name;
});
//unsubscribe(); 
var currentState = store.getState();
console.log('Current State ', currentState);


store.dispatch({
	type: 'CHANGE_NAME',
	name: 'Mariusz'
});



store.dispatch ({
	type: 'CHANGE_NAME',
	name: 'Aurelia'
});
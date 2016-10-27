var redux = require('redux');

console.log('starting redux example');

var reducer = (state= {name: 'Anonymous'}, action)=> {
	// state = state || {name: 'Anonymous'};//es5
	console.log('New action ', action);

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
var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('Current State ', currentState);


store.dispatch({
	type: 'CHANGE_NAME',
	name: 'Mariusz'
});

console.log('Name should be Mariusz ', store.getState());
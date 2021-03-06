var redux = require('redux');

console.log('starting redux example');

var stateDefault = {
	name: 'Anonymous',
	hobbies: [],
	movies: []
};
var nextHobbyId = 1;
var nextMovieId = 1;
var reducer = (state= stateDefault, action)=> {
	// state = state || {name: 'Anonymous'};//es5
	// console.log('New action ', action);

	switch (action.type) {
		case 'CHANGE_NAME':
			return {
				...state,
				name: action.name
			};
			break;
		case 'ADD_HOBBY' :
			return {
				...state,
				hobbies: [
					...state.hobbies,
					{
						id: nextHobbyId++,
						hobby: action.hobby
					}
				]
			};
		case 'REMOVE_HOBBY' :
			return {
				...state,
				hobbies: state.hobbies.filter( (hobby) => hobby.id !==action.id)
				
			};
			
		case 'ADD_MOVIE':
			return {
				...state,
				movies: [
					...state.movies,
					{
						id: nextMovieId++,
						title: action.title,
						genre: action.genre
					}
				]
			};
		case 'REMOVE_MOVIE'	:
			return {
				...state,
				movies: state.movies.filter((movie)=>movie.id !==action.id)
			}
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

	console.log('new state ', store.getState());
});
//unsubscribe(); 
var currentState = store.getState();
console.log('Current State ', currentState);


store.dispatch({
	type: 'CHANGE_NAME',
	name: 'Mariusz'
});

store.dispatch ({
	type: 'ADD_HOBBY',
	hobby: 'Running'
});
store.dispatch ({
	type: 'ADD_HOBBY',
	hobby: 'walking'
});
store.dispatch ({
	type: 'REMOVE_HOBBY',
	id: 2
});

store.dispatch ({
	type: 'CHANGE_NAME',
	name: 'Aurelia'
});

store.dispatch ({
	type: 'ADD_MOVIE',
	title: 'Mad Max',
	genre: 'Action'
});
store.dispatch ({
	type: 'ADD_MOVIE',
	title: 'Avatar',
	genre: 'Sci-Fi'
});
store.dispatch ({
	type: 'REMOVE_MOVIE',
	id: 1
});


var redux = require('redux');
console.log('starting todo redux example');

var stateDefault = {
 searchText: '',
 showCompleted: false,
 todos: []
};
var reducer = (state = stateDefault, action) => {

return state;
};

var store = redux.createStore(reducer);

console.log('Current stae ', store.getState());
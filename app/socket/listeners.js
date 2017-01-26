import dataActions from '../actions/data-actions';

import io from 'socket.io-client';
export const socket = io.connect('/');

export default function(store) {

	socket.on('full-data-load', (data) => {
		store.dispatch(dataActions.loadAllData(data));
	});

	socket.on('todo-added', (newTodo) => {
		store.dispatch(dataActions.addTodo(newTodo));
	});

	socket.on('todo-edited', (newTodo) => {
		store.dispatch(dataActions.editTodo(newTodo));
	});

	socket.on('todo-deleted', (newTodo) => {
		store.dispatch(dataActions.deleteTodo(newTodo));
	});
}

import dataActions from '../actions/data-actions';

import io from 'socket.io-client';
export const socket = io.connect('/');

export default function(store) {
	// var emit = socket.emit,
  //       onevent = socket.onevent;
	//
  // socket.emit = function () {
  //   console.log('***', 'emit', Array.prototype.slice.call(arguments));
  //   emit.apply(socket, arguments);
  // };
  // socket.onevent = function (packet) {
  //   console.log('***', 'on', Array.prototype.slice.call(packet.data || []));
  //   onevent.apply(socket, arguments);
  // };

	socket.on('full-data-load', (data) => {
		store.dispatch(dataActions.loadAllData(data));
	});

	socket.on('form-added', (newForm) => {
		store.dispatch(dataActions.addForm(newForm));
	});

	socket.on('form-edited', (newForm) => {
		store.dispatch(dataActions.editForm(newForm));
	});
}

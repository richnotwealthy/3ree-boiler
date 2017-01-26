module.exports = function(socket) {
	return function(rows) {
		rows.each(function(err, row) {
			if (row.new_val && !row.old_val)
        socket.emit('todo-added', row.new_val);
      else if (row.new_val && row.old_val)
        socket.emit('todo-edited', row.new_val);
      else if (!row.new_val && row.old_val)
        socket.emit('todo-deleted', row.old_val);
		});
	};
};
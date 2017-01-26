var io = require('socket.io');
var db = require('rethinkdbdash');
var config = require('../../config/db');
var changefeedSocketEvents = require('./socket-events');

var r = db({ host: config.host, port: config.port });

// If no db '3ree', create db '3ree'
r.dbList().contains('3ree')
  .do(function(databaseExists) {
    return r.branch(
      databaseExists,
      { dbs_created: 0 },
      r.dbCreate('3ree')
    );
  }).run().then(function() {
    // If no table 'sample', create table 'sample'
    r.db('3ree').tableList().contains('sample')
      .do(function(tableExists) {
        return r.branch(
          tableExists,
          { tables_created: 0 },
          r.db('3ree').tableCreate('sample')
        );
      }).run();
  });

module.exports = function(server) {

  io(server).on('connection', function(socket) {

    r.db('3ree').table('sample')
      .orderBy(r.desc('timestamp'))
      .run().then(function(result) {
        socket.emit('full-data-load', result);
    });

    r.db('3ree').table('sample').changes().run()
      .then(changefeedSocketEvents(socket));

    socket.on('add-todo', function(data) {
      data['timestamp'] = Date.now();
      r.db('3ree').table('sample')
        .insert(data).run();
    });

    socket.on('edit-todo', function(data) {
      data['timestamp'] = Date.now()
      r.db('3ree').table('sample').getAll(data.id)
        .update(data).run();
    });

    socket.on('delete-todo', function(data) {
      r.db('3ree').table('sample').getAll(data.id)
        .delete().run();
    });

  });

}
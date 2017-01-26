var io = require('socket.io');
var db = require('rethinkdbdash');
var config = require('../../config/db');
var changefeedSocketEvents = require('./socket-events');

var r = db({ host: config.host, port: config.port });

module.exports = function(server) {

  io(server).on('connection', function(socket) {

    r.db('3ree').table('sample')
    .orderBy(r.desc('timestamp'))
    .run().then(function(result) {
      socket.emit('full-data-load', result);
    });

    r.db('3ree').table('sample').changes().run()
      .then(changefeedSocketEvents(socket));

    socket.on('submit-form', function(data) {
      data['timestamp'] = Date.now();
      r.db('3ree').table('sample')
        .insert(data).run();
    });

    socket.on('update-form', function(data) {
      data['timestamp'] = Date.now()
      r.db('3ree').table('sample').getAll(data.id)
        .update(data).run();
    });

  });

}
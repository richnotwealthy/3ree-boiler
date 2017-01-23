var io = require('socket.io');
var db = require('rethinkdbdash');
var changefeedSocketEvents = require('./socket-events');

// var r = db({ host: DB_HOST, port: DB_PORT });

module.exports = function(server) {

  io(server).on('connection', function(socket) {

    // r.db('db').table('table')
    // .orderBy(r.desc('timestamp'))
    // .run().then(function(result) {
    //   socket.emit('full-data-load', result);
    // });

    // r.db('db').table('table').changes().run()
    //   .then(changefeedSocketEvents(socket));

    socket.on('submit-form', function(data) {
      data['timestamp'] = Date.now();
      data['user'] = userID;
      // r.db('db').table('table')
      //   .insert(data).run().then(function(response){
      //     console.log('rt response::::', response);
      //     data['id'] = response['generated_keys'][0];
      //     console.log(data);
      //   });
    });

    socket.on('update-form', function(data) {
      data['timestamp'] = Date.now()
      // r.db('db').table('table').getAll(data.id)
      //   .update(data).run().then(function(response){
      //     console.log('rt response::::', response);
      //   });
    });
  });

}
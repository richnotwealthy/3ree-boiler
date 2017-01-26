var db = require('rethinkdbdash');
var config = require('../../config/db');

var r = db({ host: config.host, port: config.port });

// Creates table 'sample' inside of db '3ree' on your rethinkdb instance

r.dbCreate('3ree').run().then(function() {
  r.db('3ree').tableCreate('sample').run().then(function() {
    process.exit();
  });
});
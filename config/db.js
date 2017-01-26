var rethinkdbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 28015 // default rethinkdb port
}

module.exports = rethinkdbConfig;
var rethinkdbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 28015 // docker exposed port
}

module.exports = rethinkdbConfig;
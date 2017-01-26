var rethinkdbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 32772 // docker exposed port
}

module.exports = rethinkdbConfig;
require('dotenv').config()
const path = require('path')

module.exports = {
  client: 'pg',
  connection: {
    host: process.env.PG_HOST,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    port: process.env.PG_PORT,
    ssl: { rejectUnauthorized: false }
  },

  migrations: {
    directory: path.join(__dirname, 'src/database/migrations')
  },
  seeds: {
    directory: path.join(__dirname, 'src/database/seeds')
  }
}

require('dotenv').config()
const path = require('path')

module.exports = {
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    ssl: { rejectUnauthorized: false }
  },

  migrations: {
    directory: path.join(__dirname, 'src/database/migrations')
  },
  seeds: {
    directory: path.join(__dirname, 'src/database/seeds')
  }
}

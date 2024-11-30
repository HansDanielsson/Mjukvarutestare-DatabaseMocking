/*
const { Sequelize } = require('sequelize')

// Setup Sequelize
const sequelize = new Sequelize({
  dialect: 'mysql', // Specifierar vilken databas vi jobbar med
  host: 'localhost',
  username: 'Hans',
  password: 'Internet2024!',
  database: 'medie'
})

module.exports = sequelize
*/

const mysql = require('mysql2/promise')

const pool = mysql.createPool({
  host: 'localhost',
  user: 'Hans',
  password: 'Internet2024!',
  database: 'medie',
  connectTimeout: 10 // Maximum numbers of connections in the pool
})
module.exports = pool

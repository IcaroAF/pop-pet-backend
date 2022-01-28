/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
// const knex = require('knex')

exports.up = (knex) => {
  return knex.schema.createTable('products', (table) => {
    table.increments('id')
    table.text('name')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('products')

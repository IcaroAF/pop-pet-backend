/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
// const knex = require('knex')

exports.up = (knex) => {
  return knex.schema.createTable('products', (table) => {
    table.increments('id')
    table.text('name').notNullable()
    table.integer('price').notNullable()
    table.text('description').notNullable()
    table.integer('amount').notNullable()
    table.text('img').notNullable()
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('products')

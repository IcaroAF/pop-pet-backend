/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
// const knex = require('knex')

exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id')
    table.text('name').notNullable()
    table.text('username').notNullable()
    table.text('email').notNullable().unique()
    table.text('password')
    table.text('cpf').notNullable().unique()
    table.text('zipcode').notNullable()
    table.text('street').notNullable()
    table.text('home_num').notNullable()
    table.text('city').notNullable()
    table.text('state').notNullable()
    table.text('ref_address')
    table.text('phone').notNullable()
    table.text('photo')
    table.boolean('is_admin').notNullable().defaultTo(false)
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('users')

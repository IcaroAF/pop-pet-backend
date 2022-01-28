/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
// const knex = require('knex')

exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id')
    table.text('name').notNullable()
    table.integer('email').notNullable().unique()
    table.text('password')
    table.text('cpf').notNullable().unique()
    table.text('zipcode').notNullable()
    table.text('street').notNullable()
    table.text('home_num').notNullable()
    table.text('city').notNullable()
    table.text('state').notNullable()
    table.text('ref_address')
    table.text('phone_1').notNullable()
    table.text('phone_2').notNullable()
    table.text('photo').notNullable()
    table.text('role').notNullable()
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('users')

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('products')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('products').insert([
        {
          name: 'Mordedor com som',
          price: 5000,
          description: 'Mordedor para seu cachorro com som',
          amount: 20,
          img: 'https://staticpetz.stoom.com.br/fotos/1633381039419.jpg'
        },
        {
          name: 'Brinquedo zee-dog alien',
          price: 7000,
          description: 'Martelinho para cães',
          amount: 5,
          img: 'https://staticpetz.stoom.com.br/fotos/1637692988275.jpg'
        },
        {
          name: 'Urso de látex',
          price: 700,
          description: 'Ursinho de latex para cachorros',
          amount: 10,
          img: 'https://staticpetz.stoom.com.br/fotos/1637692988275.jpg'
        }
      ])
    })
}

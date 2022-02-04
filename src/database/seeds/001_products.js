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
          category: 'brinquedos',
          amount: 20,
          img: 'https://staticpetz.stoom.com.br/fotos/1633381039419.jpg'
        },
        {
          name: 'Brinquedo zee-dog alien',
          price: 7000,
          description: 'Martelinho para cães',
          category: 'brinquedos',
          amount: 5,
          img: 'https://staticpetz.stoom.com.br/fotos/1637692988275.jpg'
        },
        {
          name: 'Urso de látex',
          price: 700,
          description: 'Ursinho de latex para cachorros',
          category: 'brinquedos',
          amount: 10,
          img: 'https://staticpetz.stoom.com.br/fotos/1597165847763.jpg'
        },
        {
          name: 'Ração Golden Fórmula Mini Bits Para Cães Adultos Pequeno Porte Sabor Carne e Arroz',
          price: 12000,
          description: 'Ração sabor carne para cães adultos de pequeno porte',
          category: 'rações',
          amount: 20,
          img: 'https://staticpetz.stoom.com.br/fotos/1562334656536.jpg'
        }
      ])
    })
}

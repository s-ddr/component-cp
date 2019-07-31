const faker = require('faker');

const randomChair = () => {
  const price = faker.commerce.price();
  const minPrice = price - Math.random() * price;
  return {
    name: `${faker.lorem.slug()} ${faker.commerce.product()}`,
    collection_id: Math.ceil(Math.random() * 10000000),
    url: faker.random.image(),
    max_price: price,
    min_price: minPrice.toFixed(),
    limited_offer: faker.random.boolean(),
    on_sale: faker.random.boolean()
  }
}

module.exports = randomChair;
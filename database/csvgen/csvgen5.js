const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');
var writer = csvWriter({ sendHeaders: false });

const csvGen = (x) => {
  const fileStr = `database/csv/data${x}.csv`
  writer.pipe(fs.createWriteStream(fileStr))
  for (let i = 0; i < 10000000; i++) {
    const price = faker.commerce.price();
    const minPrice = price - Math.random() * price;
    writer.write({
      id: (i + 1) + ((x - 1) * 10000000),
      name: `${faker.lorem.slug()} ${faker.commerce.product()}`,
      collection_id: i + 1,
      url: faker.random.image(),
      max_price: price,
      min_price: minPrice.toFixed(),
      limited_offer: faker.random.boolean(),
      on_sale: faker.random.boolean()
    });
  }
  writer.end()
  console.log('done generating csv5');
}

csvGen(5);

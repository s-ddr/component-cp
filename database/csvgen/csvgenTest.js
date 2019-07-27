const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');
var writer = csvWriter();

const csvGen = (x) => {
  const fileStr = `database/csv/data${x}.csv`
  writer.pipe(fs.createWriteStream(fileStr))
  for (let i = 0; i < 100; i++) {
    writer.write({
      id: (i+1),
      name: `${faker.lorem.slug()} ${faker.commerce.product()}`,
      collection_id: i+1,
      url: faker.random.image(),
      max_price: faker.commerce.price(),
      min_price: faker.commerce.price(),
      limited_offer: faker.random.boolean(),
      on_sale: faker.random.boolean()
    });
  }
  writer.end()
  console.log('done generating csv');
}

csvGen('test');

/*

mongoimport --db collection --collection chairs --type csv --headerline --file database/csv/datatest.csv

*/
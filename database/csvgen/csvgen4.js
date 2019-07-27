const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');
// var writer = csvWriter();
var writer = csvWriter({ sendHeaders: false });

const csvGen = (x) => {
  const fileStr = `database/csv/data${x}.csv`
  writer.pipe(fs.createWriteStream(fileStr))
  for (let i = 0; i < 10000000; i++) {
    writer.write({
      id: (i+1)+((x-1)*10000000),
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

// csvGen(1);
// csvGen(2);
// csvGen(3);
csvGen(4);
// csvGen(5);
// csvGen(6);
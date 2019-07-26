const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');
var writer = csvWriter();
// var writer = csvWriter({ sendHeaders: false });

const csvGen = () => {
  const fileStr = `database/csv/testdata.csv`
  writer.pipe(fs.createWriteStream(fileStr))
  for (let i = 0; i < 10000000; i++) {
    writer.write({
      id: (i+1)+((j-1)*10000000),
      name: `${faker.lorem.slug()} ${i+1}`,
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
// csvGen(4);
// csvGen(5);
csvGen();

/*
node --max-old-space-size=8192 database/csvgen.js

delete from chairs;
select count(*) from chairs;
select * from chairs where id = 9999999


LOAD DATA LOCAL INFILE '/Users/jbishow/Documents/Javascripts/Hack Reactor/System Design Capstone/component-cp/database/csv/data1.csv' INTO TABLE chairs FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' IGNORE 1 ROWS;

LOAD DATA LOCAL INFILE '/Users/jbishow/Documents/Javascripts/Hack Reactor/System Design Capstone/component-cp/database/csv/data1.csv'
INTO TABLE chairs
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA LOCAL INFILE '/Users/jbishow/Documents/Javascripts/Hack Reactor/System Design Capstone/component-cp/database/csv/data.csv'
INTO TABLE chairs
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;


cat *.csv >data.csv
*/
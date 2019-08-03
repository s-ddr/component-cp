const fs = require('fs')
const faker = require('faker');
const csvStream = fs.createWriteStream('database/csv/data.csv');

function makeChair(i, len, col) {
  let output = ''
  for (let j = 0; j < len; j++) {
    let id = i + j
    const price = faker.commerce.price();
    const minPrice = (price - Math.random() * price).toFixed();
    const name = `${faker.lorem.slug()} ${faker.commerce.product()}`
    const collection = col
    const url = faker.random.image()
    const limited = faker.random.boolean()
    const sale = faker.random.boolean()
    output = output + `${id},${name},${collection},${url},${price},${minPrice},${limited},${sale}\n`
  }
  return output
}

var i = 0;
var col = 0
csvStream.write('id,name,collection_id,url,max_price,min_price,limited_offer,on_sale\n');

function write() {
  var ok = true;
  do {
      i += 1;
      col += 1;
      if (col % 10000000 === 0) { console.log(i, 'chairs saved in', col, 'collections') }
      if (col === 5000000) {
        console.log('halfway there')
      }
      if (col === 2500000) {
        console.log('one-quarter generated')
      }
      if (col === 7500000) {
        console.log('three-quarters generated')
      }
      if (col === 10000000) {
        let len = Math.ceil(Math.random() * 3) + 5
        csvStream.write(makeChair(i, len, col), 'utf8', () => { csvStream.end() });
        i += len-1
      } else {
        let len = Math.ceil(Math.random() * 3) + 5
        ok = csvStream.write(makeChair(i, len, col), 'utf8');
        i += len-1
      }
  } while (col < 10000000 && ok);
  if (col > 0) {
    csvStream.once('drain', write);
  }
}

write();

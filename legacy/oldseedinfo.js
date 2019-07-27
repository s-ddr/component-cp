// const Model = require('./model.js');
const faker = require('faker/locale/en')

// //increment loop every 8000

const bulkAdd = (chairs) => {
  Model.Chairs
    .bulkCreate(chairs)
    .then(result => {
      if (result[1] === false) {
        console.log('Already existed in the database');
      } else {
        console.log('Successfully added to database');
      }
    })
    .catch(err => console.error('Issue seeding Users Table', err))
}

// node--max - old - space - size=8192 database / seed.js

/*

{
        name: faker.lorem.words(),
        collection_id: i,
        url: faker.random.image(),
        max_price: faker.commerce.price(),
        min_price: faker.commerce.price(),
        limited_offer: faker.random.boolean(),
        on_sale: faker.random.boolean()
      }

const chairs = []
for (let k = 0; k < 1250; k++){
  let i = k*8000;
  let len = i + 8000
  for (i; i < len; i++) {
    for (let j = 0; j < 5; j++){
      chairs.push({
        name: faker.lorem.words(),
        collection_id: i,
        url: faker.random.image(),
        max_price: faker.commerce.price(),
        min_price: faker.commerce.price(),
        limited_offer: faker.random.boolean(),
        on_sale: faker.random.boolean()
      })
    }
  }
  console.log(chairs.length)
}
console.log(chairs.length);




*/

// const chairs2 = []
// for (let i = 8001; i < 16000; i++) {
//   for (let j = 0; j < 5; j++) {
//     chairs2.push({
//       name: faker.lorem.words(),
//       collection_id: i,
//       url: faker.random.image(),
//       max_price: faker.commerce.price(),
//       min_price: faker.commerce.price(),
//       limited_offer: faker.random.boolean(),
//       on_sale: faker.random.boolean()
//     })
//   }
// }

// Model.Chairs
//   .bulkCreate(chairs2)
//   .then(result => {
//     if (result[1] === false) {
//       console.log('Already existed in the database');
//     } else {
//       console.log('Successfully added to database');
//     }
//   })
//   .catch(err => console.error('Issue seeding Users Table', err));


//const names = [
//   "Grey Chair",
//   "Beige Sofa chair",
//   "Skinny Legged Grey Chair",
//   "Grey Sofa Chair",
//   "Beige Lounge Chair",
//   "James Harrison XL Wing Chair",
//   "Paulo Bent Ply Leather Chair",
//   "Thea Chair",
//   "Carlo Chair",
//   "Brownstone Armchair",
//   "Lucas Leather Swivel Base Chair",
//   "Blue Velvet Chair",
//   "Blue Cabaret Chair",
//   "Pebble Guest Chair",
//   "Sterling Armless Grey Chair",
//   "Grey Velvet Plush Chair",
//   "Grey Thea Chair",
//   "Jameson Green Chair",
//   "Grey Extendable Sofa",
//   "Extended Sloping Light Chair",
//   "Luna Chair",
//   "Circular Back White Chair",
//   "Circular Back Rose Pink Chair",
//   "John Vogel Chair",
//   "Paulo Bent Ply Leather Chair",
//   "Smooth Flapped Black Chair",
//   "Clarke Leather Wing Chair",
//   "John Vogel Dining Chair",
//   "Mid-Century Show Wood Chair",
//   "Mid-Century Velvet Dining Chair",
//   "Grey Arching Armed Chair",
//   "The Every-Girl Accent Chair",
//   "Grey Alto Chair",
//   "Black Cushioned Wood Chair",
//   "Carlo Chair",
//   "Carlo Mid-Century Chair",
//   "Contour Mid-Century Chair",
//   "Metal Frame Tufted Leather Chair",
//   "Crescent Swivel Chair",
//   "Mid-Century Desk Chair",
//   "Dries Leather Sling Chair",
//   "Erik Upholstered Wing Chair",
//   "Finley High-Back Velvet Dining Chair"
// ]
// const catagory = 'chair'
// const collection_id = [] //1-10M
// const urls = [
//   "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/%24_35.JPG",
//   "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/1034e513212989f8e48b677171a6e98e.jpg",
//   "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/1500-1500-frame-0.jpg",
//   "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/1553529613-westelm-paidge-chair-and-a-half-sleeper-1553529608.jpg",
//   "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/449df202b5e443178fe2618b065140bc.jpg",
//   "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/18-0111759-west-elm-James-Harrison-XL-Wing-Chair-2.jpg",
//   "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/Paulo-Bent-Ply-Leather-Chair-West-Elm.jpg",
//   "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/3D-model-thea-chair-west-elm_D.jpg",
//   "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/carlo-chair-west-elm-sale.jpg",
//   "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/west-elm-armchair-brownstone-armchair-west-elm-west-elm-leather-sofas.jpg",
//   "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/lucas-leather-swivel-base-chair-c.jpg?_ga=2.200170990.-1156051358.1562849388",
//   "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/542190c60b8b1da6cbda8ef61ebe98ee.jpg?_ga=2.233773662.-1156051358.1562849388",
//   "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/67903cc99325e1b12e35759785ef41ab.jpg?_ga=2.187453800.-1156051358.1562849388",
//   "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/18-0111800-west-elm-Work-Pebble-Guest-Chair.jpg?_ga=2.155073016.-1156051358.1562849388",
//   "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/19-0118417-West-Elm-Work-Sterling-Chair-Armless-with-Wood-Base.jpg?_ga=2.195845484.-1156051358.1562849388",
//   "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/27de432ccc583c908f4fee402828698c.jpg?_ga=2.223834587.-1156051358.1562849388",
//   "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/3D-model-thea-chair-west-elm_D.jpg?_ga=2.167123454.-1156051358.1562849388",
//   "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/6b53c29f7cabf5a7da1fe57ed9a7b05c.jpg?_ga=2.254088648.-1156051358.1562849388",
//   "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/8c8e0ef2c603346ce2b73e87cb333eec_xlarge.jpg?_ga=2.190217451.-1156051358.1562849388",
//   "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/9893d94e0368396fd2e720ff7d4a4100.jpg?_ga=2.267146446.-1156051358.1562849388",
//   "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/luna-chair-c.jpg?_ga=2.196424300.-1156051358.1562849388",
//   "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/DSC_2700(1).jpg?_ga=2.157761018.-1156051358.1562849388",
//   "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/IMGP8251_1-600x600.png?_ga=2.157761018.-1156051358.1562849388",
//   "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/John-Vogel-Chair.jpg?_ga=2.228948316.-1156051358.1562849388",
//   "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/Paulo-Bent-Ply-Leather-Chair-West-Elm.jpg?_ga=2.232797534.-1156051358.1562849388",
//   "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/W-D_Jan18-5.jpeg?_ga=2.158150906.-1156051358.1562849388",
//   "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/West-Elm-Clarke-Leather-Wing-Chair-living-room-furniture-sale.jpg?_ga=2.154098296.-1156051358.1562849388",
//   "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/West-Elm-John-Vogel-Dining-Chair.jpg?_ga=2.228922844.-1156051358.1562849388",
//   "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/West-Elm-Mid-Century-Show-Wood-Chair-Hero-1.jpg?_ga=2.228922844.-1156051358.1562849388",
//   "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/West-Elm-Mid-Century-Velvet-Dining-Chair.jpg?_ga=2.254171464.-1156051358.1562849388",
//   "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/_D.jpg?_ga=2.232216159.-1156051358.1562849388",
//   "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/accent-chairs-the-everygirl-21.jpg?_ga=2.257719755.-1156051358.1562849388",
//   "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/alto-chair-1-c.jpg?_ga=2.257719755.-1156051358.1562849388",
//   "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/b1g.jpg8A0755E8-813C-4C4C-A7C4-B4DF664FBB48Original.jpg?_ga=2.221263320.-1156051358.1562849388",
//   "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/carlo-chair-west-elm-sale.jpg?_ga=2.188046952.-1156051358.1562849388",
//   "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/carlo-mid-century-chair-c.jpg?_ga=2.188046952.-1156051358.1562849388",
//   "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/contour-mid-century-chair-c.jpg?_ga=2.186522217.-1156051358.1562849388",
//   "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/metal-frame-tufted-leather-chair-by-west-elm-3d-model-max-bip-obj-mtl.jpg?_ga=2.196424300.-1156051358.1562849388",
//   "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/crescent-swivel-chair-by-west-elm-3d-model-max-bip-obj-mtl.jpg?_ga=2.258760138.-1156051358.1562849388",
//   "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/desk-chair---mid-century-3D-model_D.jpg?_ga=2.258760138.-1156051358.1562849388",
//   "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/dries-leather-sling-chair-by-west-elm-3d-model-max-bip-obj-mtl.jpg?_ga=2.27546236.-1156051358.1562849388",
//   "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/erik-upholstered-wing-chair-by-west-elm-3d-model-max-bip-obj-mtl.jpg?_ga=2.234231390.-1156051358.1562849388",
//   "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/finley-high-back-velvet-dining-chair-west-elm-intended-for-decor-4.jpg?_ga=2.234231390.-1156051358.1562849388",

// ]
// const maxPrices = [
//   249,
//   349,
//   449,
//   549,
//   649
// ]
// const minPrices = [] //generate from -150 -100 or -50
// const limited_offer = [false, true]
// const onSale = [false, true]
const connection = require('./index')
const dbHelpers = require('../database/mongo/dbHelpers')
const randomChair = require('../database/createChair')

const get = (req, res) => { // grab chair by indexed collection_id
  var { id } = req.params;
  dbHelpers.getChairById(id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(404).send('Error retrieving data.');
    });
}

const post = (req, res) => {
  const chair = randomChair();
  dbHelpers.insertChair(chair)
    .then((data) => {
      res.status(201).send(`posted ${data.name} to collection: ${data.collection_id}`)
    })
    .catch((err) => {
      res.status(404).send('Error posting data.');
    })
}

const put = (req, res) => {
  //update
}

const destroy = (req, res) => {
  //delete
}

module.exports = {
  get,
  post,
  destroy,
  put
}
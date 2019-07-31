const connection = require('./index')
const dbHelpers = require('../database/mysql/dbHelpers')
const randomChair = require('../database/createChair')  

const get = (req, res) => { // grab chair by indexed collection_id
  var { id } = req.params;
  dbHelpers.getChairByIdRaw(id)
    .then((data) => {
      res.status(200).send(data[0]);
    })
    .catch((err) => {
      console.error(err);
      res.status(404).send('Error retrieving data.');
    });
}

const post = (req, res) => {
  const chair = randomChair();
  dbHelpers.postChair(chair)
    .then((data) => {
      res.status(201).send(`posted ${data.id} to ${data.collection_id}`);
    })
    .catch((err) => {
      console.error(err);
      res.status(404).send('Error posting data.');
    });
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
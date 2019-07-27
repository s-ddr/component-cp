const connection = require('./index')
const dbHelpers = require('../database/mongo/dbHelpers')

const get = (req, res) => { // grab chair by indexed collection_id
  var { id } = req.params;
  dbHelpers.getChairById(id)
    .then((data) => {
      res.status(200).send(data[0]);
    })
    .catch((err) => {
      console.error(err);
      res.status(404).send('Error retrieving data.');
    });
}

const post = (req, res) => {
  //create
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
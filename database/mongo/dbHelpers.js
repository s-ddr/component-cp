const Chair = require('./index');

const getChairById = (id) => {
  return Chair.find({ collection_id: id });
}

module.exports = {
  getChairById
}
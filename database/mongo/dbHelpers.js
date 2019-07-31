const Chair = require('./index');

const getChairById = (id) => {
  return Chair.find({ collection_id: id });
}

const insertChair = (chair) => {
  return Chair.create(chair)
}

module.exports = {
  getChairById,
  insertChair
}
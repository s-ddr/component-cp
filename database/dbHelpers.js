const {Chairs} = require('./model.js');
const connection = require('./index')

getChairs = () => {
  return Chairs.findAll({});
}

getChairByName = (name) => {
  return Chairs.findOne({
    name
  })
}

getChairByCollectionID = (id) => {
  return Chairs.findAll({
    where:
    {
      collection_id: Number(id)
    },
      raw: true
  });
}

getChairByRawId = (id) => {
  const numId = Number(id)
  const queryStr = `SELECT * FROM chairs where id=${numId} or id=${numId + 10000000} or id=${numId + 20000000} or id=${numId + 30000000} or id=${numId + 40000000} `
  return connection.query(queryStr)
}

getChairByIdRaw = (id) => {
  const queryStr = `SELECT * FROM chairs where collection_id=${+id}`
  return connection.query(queryStr)
}

module.exports = {
  getChairs,
  getChairByCollectionID,
  getChairByName,
  getChairByRawId,
  getChairByIdRaw
}
const {Chairs} = require('./model.js');
const connection = require('./index')

//route option 1 raw query
getChairByIdRaw = (id) => {
  const queryStr = `SELECT * FROM chairs where collection_id=${+id}`
  return connection.query(queryStr)
}

//native sequelize method
getChairById = (id) => {
  return Chairs.findAll({
    where:
    {
      collection_id: Number(id)
    },
    raw: true
  });
}

//route option search by native id //doesnt require indexing db
getChairByNativeId = (id) => {
  const numId = Number(id)
  const queryStr = `SELECT * FROM chairs where id=${numId} or id=${numId + 10000000} or id=${numId + 20000000} or id=${numId + 30000000} or id=${numId + 40000000} `
  return connection.query(queryStr)
}

postChair = (chair) => {
  return Chairs.create(chair)
}

module.exports = {
  getChairById,
  getChairByIdRaw,
  getChairByNativeId,
  postChair
}

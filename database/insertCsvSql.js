const connection = require('./mysql/index')

insertCsv = () => { 
  const queryStr = `LOAD DATA LOCAL INFILE '/Users/jbishow/Documents/Javascripts/Hack Reactor/System Design Capstone/component-cp/database/csv/data.csv' INTO TABLE chairs FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' IGNORE 1 ROWS;`
  return connection.query(queryStr)
}

indexTable = () => {
  const queryStr = `ALTER TABLE chairs ADD INDEX collection_id (collection_id);`
  return connection.query(queryStr)
}

insertCsv()
  .then(()=>console.log('inserted csv'))
  .then(()=> {
    indexTable()
      .then(() => {
        console.log('indexed table')
      })
      .catch((err) => {
        console.log('error indexing mysql table')
      })
  })
  .catch((err) => {
    console.log('error inserting csv')
  })
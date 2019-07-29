const Sequelize = require('sequelize');

const connection = new Sequelize('sdcwestelms', 'root', '', {
  host : 'localhost',
  dialect : 'mysql'
});

connection
  .authenticate()
  .then( () => console.log(`Connected to MYSQL DATABSE`))
  .catch( (err) => console.error('Not connected to the database', err));

module.exports = connection;
var Credentials = require('../credentials.js');
const Sequelize = require('sequelize');
//                                  db           user       pw             options
// AWS RDS WITH MYSQL ENGINE
// const connection = new Sequelize('fecwestelms', 'admin', Credentials.mypw, {
//     host : Credentials.host,
//     port: '3306',
//     dialect : 'mysql'
// });

// LOCALIZED DB WITH MYSQL ENGINE
const connection = new Sequelize('sdcwestelms', 'root', '', {
    host : 'localhost',
    dialect : 'mysql'
});

connection
    .authenticate()
    .then( () => console.log(`Connected to MYSQL DATABSE`))
    .catch( (err) => console.error('Not connected to the database', err));

module.exports = connection;
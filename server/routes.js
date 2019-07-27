const router = require('express').Router();
const sqlControllers = require('./sqlController');

router
  .route('/collection/sql/:id')
  .get(sqlControllers.get)

router
  .route('/collection/mongo/:id')
  .get(sqlControllers.get)

module.exports = router;
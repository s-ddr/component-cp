const router = require('express').Router();
const sqlControllers = require('./sqlController');
const mongoControllers = require('./monogoController')

router
  .route('/collection/sql/:id')
  .get(sqlControllers.get)

router
  .route('/collection/mongo/:id')
  .get(mongoControllers.get)

module.exports = router;
const router = require('express').Router();

//comment out when testing mongo
const sqlControllers = require('./sqlController');
router
  .route('/collection/sql/:id')
  .get(sqlControllers.get)

//comment out when testing mysql
const mongoControllers = require('./monogoController')
router
  .route('/collection/mongo/:id')
  .get(mongoControllers.get)

// router.route('/products-cp/:id').get(mongoControllers.get)

module.exports = router;

//todo create rest of crud methods
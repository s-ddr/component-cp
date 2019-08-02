const router = require('express').Router();

//comment out when testing mongo
// const sqlControllers = require('./sqlController');
// router
//   .route('/collection/sql/:id')
//   .get(sqlControllers.get)
  
// router
//   .route('/collection/sql')
//   .post(sqlControllers.post)

//comment out when testing mysql
const mongoControllers = require('./monogoController')
router
  .route('/collection/mongo/:id')
  .get(mongoControllers.get)

router
  .route('/collection/mongo')
  .post(mongoControllers.post)

// router.route('/products-cp/:id').get(mongoControllers.get)

module.exports = router;

//todo create rest of crud methods
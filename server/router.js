const router = require('express').Router();
const controller = require('./controller');

// Fetch or delete all data 
router.route('/allDocs')
  .get(controller.findAll)
  .delete(controller.deleteAll);

// Delete one dress
router.route('/dress')
  .delete(controller.deleteOne);

// Fetch one dress randomly
router.route('/findOneRandom')
  .get(controller.findOneRandom);

// Fetch 5 dresses for Recommendation Bar
router.route('/recommendation')
  .get(controller.recommendation);

// Create new dress
router.route('/dress')
  .post(controller.newDress);

// Delete one dress


module.exports = router;
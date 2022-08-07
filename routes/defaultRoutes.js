const express = require('express');
const { testRouteController } = require('../controllers/defaultControllers');
const router = express.Router();

router.route('/test'  ).get( testRouteController )

module.exports = router;
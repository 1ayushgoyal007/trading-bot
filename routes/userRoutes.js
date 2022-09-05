const express = require('express');
const { getUserInfo, getBalance } = require('../controllers/userController');
const router = express.Router();


router.route('/info').get( getUserInfo )
router.route('/balance').get( getBalance )

module.exports = router;
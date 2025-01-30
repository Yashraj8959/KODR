const express = require('express')
const { indexController, aboutController } = require('../controllers/index.controller')
const { getProfileController } = require('../controllers/user.controller')
const router = express.Router()

router.get('/', indexController)
router.get('/about', aboutController )
router.get('/users/profile', getProfileController )

module.exports = router;


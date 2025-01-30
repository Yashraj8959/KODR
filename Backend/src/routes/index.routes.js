const express = require('express')
const { indexController, aboutController, registerController, getUsersController, updateUserController } = require('../controllers/index.controller')
const router = express.Router()

router.get('/', indexController)
router.get('/about', aboutController )
router.get('/register', registerController )
router.get('/getUsers', getUsersController )
router.get('/updateUser', updateUserController )

module.exports = router;


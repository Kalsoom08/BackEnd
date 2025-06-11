const {registerUser} = require('../Controller/UserController')
const express = require('express')
const router = express.Router()

router.post('/register', registerUser)

module.exports = router
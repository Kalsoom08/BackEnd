const express = require('express')
const router = express.Router()
const {createUser} = require('../Controller/userController')

router.post('/user', createUser)

module.exports = router
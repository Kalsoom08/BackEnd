const express = require('express')
const router = express.Router()
const {addUser,getUsers, updateUserByID, deleteUserByID} = require('../Controller/UserController')

router.post('/user', addUser)
router.get('/user', getUsers)
router.put('/user/:id', updateUserByID)
router.delete('/user/:id', deleteUserByID)

module.exports = router
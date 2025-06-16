const express= require('express');
const router = express.Router()
const {addOrder, getAllOrders, getSpecificOrders} = require('../Controller/orderController')


router.post('/order', addOrder)
router.get('/order', getAllOrders)
router.get('/order/specific', getSpecificOrders)

module.exports = router
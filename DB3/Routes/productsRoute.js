const express = require('express');
const router = express.Router();
const {addProduct, getAllProducts} = require('../Controller/productsController')

router.post('/product', addProduct);
router.get('/product', getAllProducts)


module.exports = router
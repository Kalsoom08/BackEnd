const Product = require('../Model/productsModel')

const addProduct = async(req, res)=>{

try {
    const {name, details, price, ratings, inStock} = req.body;
    const newProduct = await Product.create({name, details, price, ratings, inStock})
    res.status(201).json({
        message: 'Product Added Successfully', 
        data : newProduct
    })
} catch (error) {
    res.status(500).json({
        error : error.message
    })}
}


const getAllProducts = async(req, res)=>{
    try {
        const products = await Product.find();
      if (products.length === 0){
        return res.status(404).json({
            message: 'No Products Found'
        });
    }
        res.status(200).json({
            message : 'Products Fetched Successfully',
            data : products
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

module.exports = {addProduct,getAllProducts}
const express = require('express');
const { UserModel } = require('../Models/UserModel');
const router = express.Router();
const bcrypt = require('bcrypt')
router.use(express.json());

const salt = 5

router.post('/registerUser', async(req, res)=>{
    const {name, email, password} = req.body
    try {

        const hashPassword =await bcrypt.hash(password,salt)
        const createUser = await UserModel.create({name,email,password:hashPassword})
        res.json(createUser)
    } catch (error) {
        res.json({
            mesage: error.message
        })
    }
})

module.exports = router;

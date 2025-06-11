const { UserModel } = require('../Models/UserModel');
const bcrypt = require('bcrypt')
const salt = 5

const registerUser = async(req, res)=>{
    const {name, password} = req.body;
    try {
        const hashPassword = await bcrypt.hash(password, salt)
        const createUser = await UserModel.createUser({
            name,
            password: hashPassword
        })
        res.json(createUser)
    } catch (error) {
        res.json({
            message : error.message
        })}}

module.exports = {registerUser}

const User = require('../Model/UserModel')



const addUser = async(req, res)=>{
    try {
        const {name, email, password} = req.body
        const add = await User.create({name, email, password})
        res.status(201).json({
            message : 'User Added Successfully',
            data : add
        })
    } catch (error) {
        res.status(500).json({
            error : error.message
        })}}


const getUsers = async(req, res) =>{
    try {
       const get = await User.find()
       res.status(201).json({
        message : 'All Users', 
        data : get
       })
        
    } catch (error) {
        res.status(500).json({
            error : error.message
        })
    }
}

const getuserByID = async(req, res)=>{
const {id} = req.params;
try {
    const user = await User.findById(id);
if(!user){
    res.status(404).json({
        message : "User Not Found"
    })}

res.status(201).json({
    message : "User",
    data : user
})
} catch (error) {
    res.status(500).json({
        error : error.message
    })
}
}


const updateUserByID = async (req, res)=>{
    const {id} = req.params;
    const update = req.body

    try {
        const updatedUser = await User.findByIdAndUpdate(id, update, {new : true})
        if(!updatedUser) {
            res.status(404).json({
                message : 'User Not Found'
            })
        }

        res.status(201).json({
            message: 'Update User Successfully',
            data : updatedUser
        })
    } catch (error) {
        res.status(500).json({ error: error.message });        
    }}

const deleteUserByID = async(req, res)=>{
    const {id} = req.params
    try {
        const deleteUser = await User.findByIdAndDelete(id)
        if(!deleteUser) {
            res.status(404).json({
                message: "User Not Found"
            })
        }

         res.status(201).json({
            message : "User Deleted Successfully"
        })
    } catch (error) {
        res.status(500).json({
            error : error.message
        })
    }
    
}
module.exports = {addUser, getUsers,getuserByID, updateUserByID, deleteUserByID}
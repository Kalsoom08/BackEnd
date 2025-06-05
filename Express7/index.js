require('dotenv').config()
const bcrypt = require('bcrypt')

//Creating Hash Passowrd
const salt = 10;
const userPassword = process.env.Password
bcrypt.hash(userPassword, salt, (err , hashPassword)=>{
    if(err){
        console.log(err);
    }else{
        console.log(hashPassword);
    }

bcrypt.compare(userPassword, hashPassword, (err, result)=>{
    if(err){
        console.log(err);
    }else{
        console.log('Match Successfully', result);
    }
})
})







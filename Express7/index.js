require('dotenv').config()
const bcrypt = require('bcrypt')

//Creating Hash Passowrd
// const salt = 10;

// const userPassword = process.env.Password
//  bcrypt.hash(userPassword, salt, (err,hash)=>{
//   if(err){
//     console.log(err);
//   }else{
//     console.log(hash);
//   }
//  })

//Comparing
// const PlainPassword = process.env.Password
// const salt = 10

// bcrypt.hash(PlainPassword, salt, (err, hashPassword)=>{
//     if(err){
//         console.log(err);
//     }

//     bcrypt.compare(PlainPassword,hashPassword, (err, result)=>{
//     if(err) console.log(err);
//     if (result){
//         console.log("Matched");
//     } else{
//         console.log("Error");
//     }
// })
// })




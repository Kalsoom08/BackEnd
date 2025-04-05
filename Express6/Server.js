require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const authMiddleware = require('./authMiddlware');
const app = express();
app.use(express.json());
const SECRET_KEY = process.env.SECRET_KEY;

const users = [
    { username : 'khan1' , password : 'khan123'},
    { username : "khan2" , password : "khan234" }
]

const generateToken = (user) =>{
    const payload = {username : user.username}
    return jwt.sign(payload, SECRET_KEY , {expiresIn : "2h"})
}

app.post('/login', (req, res)=>{
  const {username, password} = req.body
  const findUser = users.find(user => user.username == username && user.password == password)
  if(!findUser) return res.json("Invalid Credentials")

    const token = generateToken(findUser)
    res.json({message: "Login Successfully", token})
 })


app.get('/public', (req, res) => {
  res.json({ message: 'This is a public route!' });
});

app.get('/users', authMiddleware, (req, res) => {
  res.json(users); 
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));

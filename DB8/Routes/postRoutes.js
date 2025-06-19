const express = require('express')
const router = express.Router()
const {createPost, getAllPosts} = require('../Controller/postController')

router.post('/post', createPost)
router.get('/post', getAllPosts)

module.exports = router
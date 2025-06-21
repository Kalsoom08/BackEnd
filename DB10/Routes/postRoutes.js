const express = require('express')
const router = express.Router()
const {createPost, getPostsWithUser} = require('../Controller/postController')

router.post('/post', createPost)
router.get('/post', getPostsWithUser)


module.exports = router
const Posts = require('../Model/postModel');

const createPost = async (req, res) => {
  try {
    const { title, content, user } = req.body;
    const post = await Posts.create({ title, content , user});
    res.status(201).json({
      message: 'Post Added Successfully',
      data: post
    });
  } catch (error) {
    res.status(500).json({
      error: error.message
    }); 
  }
};


const getAllPosts = async(req, res)=>{
try {
  // const posts = await Posts.aggregate([{$match: {}}]
  // const posts = await Posts.find().populate('user')
  if(posts.length == 0){
    res.status(404).json({
      message: "No Posts Found"
    })
  }

  res.status(200).json({
    message: 'Posts Fetched Successfully',
    data : posts
  })
  } catch (error) {
  res.status(500).json({
    error: error.message
  })
}
}

module.exports = { createPost, getAllPosts };

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
  // const posts = await Posts.find().populate('user')
  // const posts = await Posts.find().populate('user', 'name')
  //Filter
  // const posts = await Posts.find().populate({
  //   path: "user",
  //   match : {email: "abc@gmail.com"}
  // })

  // const posts = await Posts.find().populate({
  //   path: "user",
  //   options: {sort : { name : 1}, limit : 0}
  // })

  //only works when the ref in the post (user), but user also ref it from another
  // const posts = await Posts.find().populate({
  //   path: 'user',
  //   populate: {path: 'profile'}
  // })
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

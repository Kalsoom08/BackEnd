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


const getPostsWithUser = async(req, res)=>{
  try {
    const posts = await Posts.aggregate([{
      $lookup: {
        from: 'users',
        localField: 'user',
        foreignField: '_id',
        as: 'userInfo'
      }
    }, 
  {$unwind: "$userInfo"},
  {
    $project: {
          title: 1,
          content: 1,
          "userInfo.name": 1,
          "userInfo.email": 1,
          _id: 1
    }
  }
  ])
    res.status(200).json({
      message: 'Data Fetched Successfully',
      data : posts
    })
  } catch (error) {
    res.status(500).json({
      error: error.message
    })
  }
}

module.exports = { createPost , getPostsWithUser};

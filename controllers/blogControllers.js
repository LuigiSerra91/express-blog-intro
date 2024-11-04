const posts = require('../data/postList.js')


const  index = (req,res) => {

    const responseData ={
        data:posts,
        count: posts.length
      }
      res.status(200).json(responseData)
}


const show = ('/posts/:id', (req, res) => {
    const post = posts.find(post => post.id === Number(req.params.id))
    console.log(post);
    
    console.log(req);
    console.log(req.params.id);
    
    if(!post){
      return res.status(404).json({
        error: '404! not found'
      })
    }
    return res.json({
      data: post
    })
  })
module.exports= {
    index,
    show
}
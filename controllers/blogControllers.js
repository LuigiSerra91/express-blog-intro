const posts = require('../data/postList.js')


function index(req,res){

    res.json({
        data:posts,
        count: posts.length
      })
}


module.exports= {
    index
}
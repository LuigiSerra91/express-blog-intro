const postList = require('../data/postList')


function index(req,res){

    res.json({
        data: postList,
        count: postList.length
      })
}


module.exports= {
    index
}
const Post=require('../models/post');
const Comment=require('../models/comment');

module.exports.create=function(req,res){
    Post.create({
        content:req.body.content,
        user:req.user._id
    },function(err,post){
        if(err){
            console.log("error in creating post");
            return;
        }
        return res.redirect('back');
    })
}

module.exports.destroy=function(req,res){
    Post.findById(req.params.id,function(err,post){
        //.id -> converts objectId into string
        if(post.user==req.user.id)//post ka ppa==jo login h(post belongs to user esa sa)
        {
            post.remove();
            //delete comments bhi Comment model s no

            Comment.deleteMany({post:req.params.id},function(err){
                return res.redirect('back');
            });

        }
        else
        {
            return res.redirect('back');
        }
    });
}
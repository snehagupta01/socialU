const Comment=require('../models/comment');
const Post=require('../models/post');

module.exports.create=function(req,res){
    //add postId to comment
    //add commentId to post(fast access no)
    Post.findById(req.body.post,function(err,post){
        if(post)//if post h
        {
            Comment.create({
                content:req.body.content,
                post:req.body.post,
                user:req.user._id
            },function(err,comment){
                //handle err
                post.comments.push(comment);//update existing 
                post.save();
                res.redirect('/');

            })
        }
    })
}
const Post=require('../models/post');
const Comment=require('../models/comment');

module.exports.create=async function(req,res){
    try{
        await Post.create({
            content:req.body.content,
            user:req.user._id
        });
    
        return res.redirect('back');
    }
    catch(err){
        console.log('error',err);
        return;
    }
}

module.exports.destroy=async function(req,res){

    try{
        let post=await Post.findById(req.params.id);

        if(post.user==req.user.id)
        {
            post.remove();
            await Comment.deleteMany({post:req.params.id});
            return res.redirect('back');
        }
        else
        {
            return res.redirect('back');
        }
    }
    catch(err)
    {
        console.log('error',err);
    }
    // Post.findById(req.params.id,function(err,post){
    //     //.id -> converts objectId into string
    //     if(post.user==req.user.id)//post ka ppa==jo login h(post belongs to user esa sa)
    //     {
    //         post.remove();
    //         //delete comments bhi Comment model s no

    //         Comment.deleteMany({post:req.params.id},function(err){
    //             return res.redirect('back');
    //         });

    //     }
    //     else
    //     {
    //         return res.redirect('back');
    //     }
    // });
}
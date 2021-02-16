const Comment=require('../models/comment');
const Post=require('../models/post');

module.exports.create=async function(req,res){
    //add postId to comment
    //add commentId to post(fast access no)
    try{
        let post=await Post.findById(req.body.post);
        if(post)//if post h
        {
            let comment=await Comment.create({
                content:req.body.content,
                post:req.body.post,
                user:req.user._id
            });

            post.comments.push(comment);
            post.save();
            res.redirect('/');
        }
    }
    catch(err){
        console.log('error',err);
        return;
    }
    // Post.findById(req.body.post,function(err,post){
    //     if(post)//if post h
    //     {
    //         Comment.create({
    //             content:req.body.content,
    //             post:req.body.post,
    //             user:req.user._id
    //         },function(err,comment){
    //             //handle err
    //             post.comments.push(comment);//update existing 
    //             post.save();
    //             res.redirect('/');

    //         })
    //     }
    // })
}

module.exports.destroy=async function(req,res){

    try{
        let comment=await Comment.findById(req.params.id);
        if(comment.user==req.user.id)
        {
            let postId=comment.post;
            comment.remove();
            let post= await Post.findByIdAndUpdate(postId,{$pull:{comments:req.params.id}});
            return res.redirect('back');
        }
        else
        {
            return res.redirect('back');
        }
    }
    catch(err){

    }
    // Comment.findById(req.params.id,function(err,comment){
    //     if(comment.user==req.user.id)
    //     {
    //         let postId=comment.post;
    //         comment.remove();
    //         Post.findByIdAndUpdate(postId,{$pull:{comments:req.params.id}},function(err,post){
    //             return res.redirect('back');
    //         });
    //     }
    //     else
    //     {
    //         return res.redirect('back');
    //     }
    // });
}
const Post = require("../models/post");
const User = require("../models/user");

module.exports.home=function(req,res){
    //res.end("<h1> express is up for socialu");

    //console.log(req.cookies);

    // Post.find({},function(err,posts){
    //     return res.render('home',{
    //         title:"Home Page",
    //         posts:posts
    //     });
    // });

    //populating the user of each post
    // Post.find({}).populate('user').exec(function(err,posts){
    //     return res.render('home',{
    //         title:"Home page",
    //         posts:posts
    //     })
    // });

    //populating the user of each post
    Post.find({})
    .populate('user')
    .populate({
        path:'comments',
        populate:{
            path:'user'
        }
    })
    .exec(function(err,posts){
        User.find({},function(err,users){
            return res.render('home',{
                title:"Home page",
                posts:posts,
                all_users:users
            });
        });
        
    });
    // return res.render('home',{
    //     title:"SG !!!" //pass the context
    // });
}
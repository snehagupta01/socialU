//controller-action
//console.log("dd");

const User = require("../models/user");

module.exports.profile=function(req,res){
    // console.log(req.cookies);
    // res.send("<h1>Profile Page : SG</h1>")
    if(req.cookies.user_id)
    {
       User.findById({_id:req.cookies.user_id},function(err,user){
           if(user)
           {
               return res.render('user_profile',{
                   title:"Profile Page No"
               });
           }
           return res.redirect('/users/sign-in'); 
       })
    }
    else
    {
        return res.redirect('/users/sign-in');
    }
}

//render the signup page
module.exports.signUp=function(req,res){
    return res.render('user_sign_up',{
        title:"SIGN UP"
    });
}

//render the signin page
module.exports.signIn=function(req,res){
    return res.render('user_sign_in',{
        title:"SIGN IN"
    });
}

//get the sign up data
module.exports.create=function(req,res){
    if(req.body.password!=req.body.confirm_password)
    {
        return res.redirect('back');
    }    
    //emailId should be unique
    User.findOne({email:req.body.email},function(err,user){
        if(err)
        {
            console.log("error in finding user");
            return;
        }
        if(!user)
        {
            User.create(req.body,function(err,user){
                if(err)
                {
                    console.log("error in creating user");
                    return;
                }
                return res.redirect('/users/sign-in');
            })
        }
        else
        {
            console.log("ek hi id s do account bnayega bhai?");
            return res.redirect('back');
        }
    });
}

//sign in and create session for users
module.exports.createSession=function(req,res){
    ///later
    console.log(req.body);
    //authentication
    //find the user
    User.findOne({email:req.body.email},function(err,user){
        if(err)
        {
            console.log("error in finding user in signing in");
            return;
        }
        //handle user found
        if(user){
            //handle password which doesn't match
            if(user.password!=req.body.password)
            {
                return res.redirect('back');
            }
            //handle session creation
            res.cookie('user_id',user._id);
            return res.redirect('/users/profile');
        }
        else{
            //handle user not found
            return res.redirect('back');
        }
    });  
}
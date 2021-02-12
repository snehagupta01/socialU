//controller-action
//console.log("dd");
module.exports.profile=function(req,res){
    res.send("<h1>Profile Page : SG</h1>")
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

//get the sign up later
module.exports.create=function(req,res){
    ///later
}

//sign in and create session for users
module.exports.createSession=function(req,res){
    ///later
}
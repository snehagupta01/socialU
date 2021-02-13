const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;

const User=require('../models/user');

//authentication using passport.js
passport.use(new LocalStrategy({
    usernameField:'email'
    },
    function(email,password,done){
        //find a user and establish identity
        console.log("in password");
        console.log(email);
        User.findOne({email:email},function(err,user){
            if(err){
                console.log("error in finding user -> passport");
                return done(err);//report errro to passport
            }

            if(!user || user.password!=password){
                console.log("invalid username/password");
                return done(null,false);//arg1-error,arg2-authentication done?
            }
            console.log(user);
            return done(null,user);
        });
    }
));

//serializing the user to decide which key to be kept in cookie
passport.serializeUser(function(user,done){
    done(null,user._id);
});

//deserializing the user from the key in the cookies
passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if(err){
            console.log("error in finding user -> passport");
                return done(err);//report errro to passport
        }
        return done(null,user);
    });
});

//check if the usser is authenticated(middleware)
passport.checkAuthentication=function(req,res,next){
    if(req.isAuthenticated())
    {
        return next();
    }
    //user not signed in
    return res.redirect('/users-sign-in');
};

passport.setAuthenticatedUser=function(req,res){//check wheteer session cookie is present or not if p, aight authenticated
    if(req.isAuthenticated())
    {
        //req.user contains the current signed in user from session-cookie & we r sending this to local for views
        res.locals.user=req.user;
    }
    next();
}
module.exports=passport;

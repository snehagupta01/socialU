const express=require('express');
const app=express();
const port=8000;
const expressLayouts=require('express-ejs-layouts');
const cookieParser=require('cookie-parser');
const db=require('./config/mongoose');
//used for session-cookie
const session=require('express-session');
const passport=require('passport');
const passportLocal=require('./config/passport-local-strategy');

app.use(express.urlencoded());//appending form data to body no

app.use(cookieParser());
app.use(express.static('./assets'));
app.use(expressLayouts);
/**
 * app.use(expressLayouts);
 * kk, so what it does is : if in controller i say res.render('xyz');
 * then it will combine my (layout.ejs+this xyz) cool
 */

//use express router

//extract links & scripts from individual pages and place them in head & end of body resp
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);
//set up the view engine
app.set('view engine','ejs');
app.set('views','./views');

app.use(session({
    name:'socialU',
    ///later->change the secret before deployment in production modee
    secret:'kuchbhifilhaal',
    saveUnitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*100)
    }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/',require('./routes'));
//app.use('/',require('./routes/index'));(by def will fetch index)

app.listen(port,function(err){
    if(err)
    {
        console.log("error in running");
        return;
    }
    // console.log("port is up and running on port : ",port);
    console.log(`port is up and running on port : ${port}`);//interpolation
});
module.exports.home=function(req,res){
    //res.end("<h1> express is up for socialu");

    console.log(req.cookies);

    return res.render('home',{
        title:"SG !!!" //pass the context
    });
}
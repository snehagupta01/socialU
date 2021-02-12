const express=require('express');
const app=express();
const port=8000;


//use express router
app.use('/',require('./routes'));
//app.use('/',require('./routes/index'));(by def will fetch index)

//set up the view engine
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
    if(err)
    {
        console.log("error in running");
        return;
    }
    // console.log("port is up and running on port : ",port);
    console.log(`port is up and running on port : ${port}`);//interpolation
});
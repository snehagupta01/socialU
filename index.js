const express=require('express');
const app=express();
const port=8000;

app.listen(port,function(err){
    if(err)
    {
        console.log("error in running");
        return;
    }
    // console.log("port is up and running on port : ",port);
    console.log(`port is up and running on port : ${port}`);//interpolation
});
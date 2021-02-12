const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost/socialU_development");

const db=mongoose.connection;

//console.log("loaded db wala file");

db.on('error',console.error.bind("Error connection to databse"));

db.once("open",function(){
    console.log("connected to mongodb successfully!!")
});

module.exports=db;
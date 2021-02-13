const mongoose=require('mongoose');

const postSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId, //referring to objectId(object here:User{name:,email,password bla bla})
        ref:'User'
    }
},{
    timestamps:true
});

const Post=mongoose.model('Post',postSchema);

module.exports=Post;
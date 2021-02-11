//entry point for all routes
const express=require('express');
//fetch the existing insatnce

const homeController=require('../controllers/home_controller');

const router=express.Router();

console.log("router loaded");

router.get('/',homeController.home);
router.use('/users',require('../routes/users'));/*
if anything comes related to user ,user route will take care of it no,
and it is futher mapped 
*/
router.use('/posts',require('../routes/posts'));

module.exports=router;
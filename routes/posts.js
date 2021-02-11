const express=require('express');

const router=express.Router();

const posts_controller=require('../controllers/posts_controller');

router.get('/create-post',posts_controller.createpost);

module.exports=router;
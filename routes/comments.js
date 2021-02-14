const express=require('express');
const passport = require('passport');

const router=express.Router();

const comments_controller=require('../controllers/comments_controller');

router.post('/create',passport.checkAuthentication,comments_controller.create);

module.exports=router;
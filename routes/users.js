const express=require('express');
const passport = require('passport');
const router=express.Router();

const usersController=require('../controllers/users_controller');

console.log("profle loaded");

router.get('/profile',passport.checkAuthentication,usersController.profile);
router.get('/sign-up',usersController.signUp);
router.get('/sign-in',usersController.signIn);
router.post('/create',usersController.create);
// router.post('/create-session',usersController.createSession);
router.get('/sign-out',usersController.signOut);

//use passport as a middleware to authenticate
router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect:'/users/sign-in'},
),usersController.createSession);
module.exports=router;
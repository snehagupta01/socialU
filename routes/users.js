const express=require('express');
const router=express.Router();

const usersController=require('../controllers/users_controller');

console.log("profle loaded");

router.get('/profile',usersController.profile);
router.get('/sign-up',usersController.signUp);

module.exports=router;
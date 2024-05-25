const express =require('express');

const router=express.Router();

const {registUser,loginUser,logoutuser,getallUser} =require('../controllers/userControls');
const {addFeedback,getAllFeedback}=require('../controllers/feedbackcontro');
router.post('/signup',registUser)

router.post('/signin', (req, res) => {
    console.log("Received request:", req.body);
    loginUser(req, res);
});

router.post('/logout',logoutuser)
router.get('/findAll',getallUser)
router.post('/feedback',addFeedback)
router.get('/getAllFeedback',getAllFeedback)
module.exports=router
const express =require("express");
const router = express.Router();
//register router

router.post("/register" ,(req,res)=> {
res.send('register user')
})

//login user
router.post("/login" ,(req,res)=> {
    res.send('User successfully logged in')
})

// check user
router.get("/check" ,(req,res)=> {
    res.send(' check user')
})

module.exports=router
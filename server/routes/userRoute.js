const express =require("express");
const router = express.Router();

const {register, login, checkuser} = require("../controllers/userController")
//register router

router.post("/register", register)

//login user
router.post("/login" ,(req,res)=> {
    res.send('User successfully logged in')
})

// check user
router.get("/check" ,(req,res)=> {
    res.send(' check user')
})

module.exports=router
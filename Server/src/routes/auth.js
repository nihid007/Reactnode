const express=require("express");
const router=express.Router();

router.post("/register" , (req,res)=>{
    console.log(req.body);
    res.send("Register Page...!");

})

router.post("/login" , (req,res)=>{
    console.log(req.body);
    res.send("login Page....!");
})

module.exports=router;


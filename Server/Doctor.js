
var express = require("express");;
var router= express.Router()

const Doctor = require("../database/Doctor");
const User = require("../database/User");


router.get("/id",(req,res)=>{
   Doctor.getAllDoctor((nn) => {
    res.send("DR")
    })
})






module.exports=router;
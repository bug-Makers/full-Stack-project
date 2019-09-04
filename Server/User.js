
var express = require("express");
var router = express.Router();

const Doctor = require("../database/Doctor");
const User = require("../database/User");

router.get("/id", (req, res) => {
    User.addUser((nn) => {
        res.send("outer id get users")
    })
})

router.get("/id" , (req,res)=>{
    User.addUser((xx)=>{
        res.json("hello")
    })
})

module.exports = router;
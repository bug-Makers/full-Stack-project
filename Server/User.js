
var express = require("express");
var router = express.Router();

const Doctor = require("../database/Doctor");
const User = require("../database/User");

router.get("/id", (req, res) => {
    User.addUser((nn) => {
        res.send("outer id get users")
    })
})



router.post('/id/book', (req, res) => {
    
    User.get('/Doctor/id');

})

module.exports = router;
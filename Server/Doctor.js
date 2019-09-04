
var express = require("express");;
var router= express.Router()

const Doctor = require("../database/Doctor");
const User = require("../database/User");


router.get("/id",(req,res)=>{
   Doctor.getAllDoctor((nn) => {
    res.send("DR")
    })
})

router.get('/booktable/:inputField1/:inputField', (req, res) => {
    let inputField1 = req.params.inputField1
    let inputField = req.params.inputField
    // console.log('inputField1:',inputField1)
    Doctor.bookTable(inputField1, inputField, (data) => {
    // console.log('SERVER:',data)
        res.json(data)
    })
})


module.exports=router;
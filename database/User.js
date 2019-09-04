const db = require('../database');

let addUser = (cb) => {
 let Appo = {
   Dr:"hala",
    "Sun": 
      {
        "1":false,
        "2":false,
        "3":false,
        "4":false,
        "5":false
      },
      "Mon": 
      {
        "1":false,
        "2":false,
        "3":false,
        "4":false,
        "5":false
      },
      "Tue": {
        "1":false,
        "2":false,
        "3":false,
        "4":false,
        "5":false
      },
      "Wed": {
        "1":false,
        "2":false,
        "3":false,
        "4":false,
        "5":false
      },
      "Thu": {
        "1":false,
        "2":false,
        "3":false,
        "4":false,
        "5":false
      }} // for in
  db.UTable.create({Fname: "hala",Lname:"momani",User:"halaa",Pass:123456,Appo }, (err, data) => {
    if (err) {
      cb(err)

    } else {
      cb(data)
    }
  })
}



module.exports = { addUser }
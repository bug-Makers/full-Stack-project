
const db = require('../database');


let getAllDoctor = (cb) => {
    db.DTable.find({ }, (err, data) => {
      if (err) {
        console.log(err)
      } else {
        cb(data)
      }
    })
  }
module.exports = { getAllDoctor }
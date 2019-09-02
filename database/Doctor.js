
const db = require('../database');

let getAllDoctor = (cb) => {
  let Appo={"Sun":{"1":false,"2":false,"3":false,"4":false,"5":false},"Mon":{"1":false,"2":false,"3":false,"4":false,"5":false},"Tue":{"1":false,"2":false,"3":false,"4":false,"5":false},"Wed":{"1":false,"2":false,"3":false,"4":false,"5":false},"Thu":{"1":false,"2":false,"3":false,"4":false,"5":false}}
  db.DTable.create({ Name: "hala", ID:1000 ,Appo}, (err, data) => {
    if (err) {
      cb(err)

    } else {
      cb(data)
    }
  })
}

module.exports = { getAllDoctor }
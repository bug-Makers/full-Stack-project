
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

  let bookTable = (inputField1, inputField ,cb) => {
  console.log('DB:', inputField1)
  console.log('DB1:', inputField)
  //["Appo"]: inputField1
    db.DTable.find({Name:inputField}, (err, data) => {
      if(err) {
        console.log(err)
      } else {
        console.log('data.Appo[inputField1]',data[0].Appo[inputField1])
        cb(data[0].Appo[inputField1])
      }
    })
  }

  let putTime = (i,day, cb) => {
    console.log(i);
    console.log(day);
    
    db.DTable.find({}, (err, data) => {
      if(err) {
        console.log(err)
      } else {
        cb(data)
        // db.DTable.updateOne({'Name': 'hala'}, {$set: {data: true}}, (err, data) => {
        //   if(err) {
        //     console.log(err)
        //   } else {
        //     cb (data)
        //   }
        // })
      }
    })
    
    // const check = `Appo.${day}.${i}`
    // console.log(check)

    
  }


module.exports = { 
  getAllDoctor,
  bookTable,
  putTime
}


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Data', { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', function () {
  console.log('mongoose connection error');
  console.log('____________________________')
});

db.once('open', function () {
  console.log('mongoose connected successfully');
  console.log('____________________________')
});




let Userschema = new mongoose.Schema({
  Fname: String,
  Lname:String,
  User:String,
  Pass:String,
 Appo:Array
})

let UTable = mongoose.model("Utable", Userschema)

let Drschema = new mongoose.Schema({
  Name: String,
  ID:Number,
  Appo:Array

})

let DTable = mongoose.model("Dtable", Drschema)


let createDoctor = (name,id) => {
  let Appo={"Sun":{"1":false,"2":false,"3":false,"4":false,"5":false},"Mon":{"1":false,"2":false,"3":false,"4":false,"5":false},"Tue":{"1":false,"2":false,"3":false,"4":false,"5":false},"Wed":{"1":false,"2":false,"3":false,"4":false,"5":false},"Thu":{"1":false,"2":false,"3":false,"4":false,"5":false}}
  DTable.create({ Name: name, ID:id ,Appo}, (err, data) => {
    if (err) {
      console.log(err)
    } else {
      console.log(`add doctor ${name} sucess`)
    }
  })
}

let doCreateDoctor=()=>{
    createDoctor('hala',1)
    createDoctor('doha',2)
}
// doCreateDoctor()

module.exports = { UTable ,DTable}
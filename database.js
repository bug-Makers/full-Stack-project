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

module.exports = { UTable ,DTable}

var express = require("express");
const cors = require('cors');
const app =express()
const USER=require("./Server/User")
const DOCTOR=require("./Server/Doctor")

app.use(cors());


app.use("/User",USER);
app.use("/Doctor",DOCTOR);

Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

const PORT =  process.env.PORT|| 9000;



app.listen(PORT, () => console.log(`Server listening to ${PORT}`));



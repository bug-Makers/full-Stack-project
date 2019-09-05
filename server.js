
var express = require("express");
const cors = require('cors');
const app =express()


app.use(cors());




app.use("/User",require("./Server/User"));
app.use("/Doctor",require("./Server/Doctor"));



const PORT =  process.env.PORT|| 9000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));



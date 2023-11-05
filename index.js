const { configDotenv } = require("dotenv");
const express = require('express')
const userRoute = require("./src/routes/user.route")
const app = express()

app.use("/soma", userRoute)


/*app.get('/soma', function (req, res) {
  const soma = 1 + 2;
  
  res.send({soma:soma});
});*/

app.listen(3000)  

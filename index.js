const { configDotenv } = require("dotenv");
const express = require('express')
const app = express()


app.get('/soma', function (req, res) {
  const soma = 1 + 2;
  
  res.send({soma:soma});
});

app.listen(3000)  

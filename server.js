const express = require('express');

var app = express();

app.use('/', function (req,res) {
  res.send('Hola');
})

app.listen(3000, function (){
  console.log('Puerto escuchando en http://localhost:3000');
})

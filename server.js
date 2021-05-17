const express = require('express');
const router = require('./network/routes');
var app = express();

// nos permite trabajar con el body de la peticion de forma sencilla
app.use(express.json());

router(app);

app.listen(3000, function (){
  console.log('Puerto escuchando en http://localhost:3000');
})

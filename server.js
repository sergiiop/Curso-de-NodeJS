const express = require('express');
const router = express.Router();

var app = express();

// nos permite trabajar con el body de la peticion de forma sencilla
app.use(express.json());
app.use(router);

router.get('/', function(req, res) {
  res.send('Hola desde router get')
});

router.post('/message', function(req, res) {
  console.log(req.body)
  res.send('Mensaje añadido con exito')
})


// app.use('/', function (req,res) {
//   res.send('Hola');
// })

app.listen(3000, function (){
  console.log('Puerto escuchando en http://localhost:3000');
})

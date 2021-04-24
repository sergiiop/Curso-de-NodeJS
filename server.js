const express = require('express');
const router = express.Router();

const response = require('./network/response');
var app = express();

// nos permite trabajar con el body de la peticion de forma sencilla
app.use(express.json());
app.use(router);

router.get('/', function(req, res) {
  // las cabeceras se mandan en la req
  console.log(req.headers);
  // tambien podemos enviar headers como respuesta
  res.header({
    'custom-header': 'nuestro valor personalizado'
  })
  // res.send('Hola desde router get');
  response.success(req,res, 'Lista de mensajes añadidos');
});

router.post('/message', function(req, res) {
  console.log(req.body)
  response.success(req, res, 'Creado correctamente');
})


// app.use('/', function (req,res) {
//   res.send('Hola');
// })

app.listen(3000, function (){
  console.log('Puerto escuchando en http://localhost:3000');
})

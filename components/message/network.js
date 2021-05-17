const express = require('express');
const controller = require('./controller');
const response = require('../../network/response');
const router = express.Router();

router.get('/', function (req, res) {
  controller.getMessage()
    .then(messageList => {
      response.success(req,res, messageList, 200);
    })
    .catch(e => {
      response.error(req,res,'Unexpected Error', 500,e);
    })
});

router.post('/', function (req, res) {
  controller.addMessage(req.body.user, req.body.message).then((fullMessage) => {
      response.success(req, res, fullMessage, 201)
    })
    .catch(err => {
      response.error(req, res, 'Información Invalida', 400, 'Error en el controller')
    })
})

router.patch('/:id', function(req,res){
  console.log(req.params.id);

  controller.updateMessage(req.params.id, req.body.text)
    .then((data) => {
      response.succes(req, res, data, 200);
    })
    .catch(e => {
      response.error(req,res,'Error Interno',500,e)
    })
  res.send('Ok');
})

module.exports = router;

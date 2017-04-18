var express = require('express');
var router = express.Router();

var UsersController = require('../controller/UsersController');
var ContatosController = require('../controller/ContatosController');
var OperadorasController = require('../controller/OperadorasController');

router.put('/users',  UsersController.update.bind(UsersController));
router.post('/users',  UsersController.create.bind(UsersController));
router.delete('/users',  UsersController.delete.bind(UsersController));
router.get ('/users', UsersController.findAll.bind(UsersController));
router.get ('/users/:_id', UsersController.findOne.bind(UsersController));

router.get ('/contatos', ContatosController.findAll.bind(ContatosController));
router.get ('/operadoras', OperadorasController.findAll.bind(OperadorasController));



module.exports = router;

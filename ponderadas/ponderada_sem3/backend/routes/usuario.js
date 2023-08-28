const express = require('express');
const userController = require('../controllers/usuario')
const userValidator = require('../middlewares/usuariosValidate')
const authenticate = require('../middlewares/autentificacao')
const router = express.Router();

router.route('/').post(userValidator.create, userController.registerUser);

router.post('/login', userController.login);

router.get('/me', authenticate.protect, userController.getMe)

module.exports = router;
const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tarefa')
const tasksValidator = require('../middlewares/tarefasValidate')
const authenticate = require('../middlewares/autentificacao')

router.route('/')
            .get(authenticate.protect, tasksController.getTasks)
            .post(authenticate.protect, tasksValidator.create, tasksController.createTask);

router.route('/:id')
            .put(authenticate.protect, tasksController.updateTask)
            .delete(authenticate.protect, tasksController.deleteTask);

module.exports = router;